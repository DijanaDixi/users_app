import React, { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Header/Header";
import UsersList from "./component/UsersList/UsersList";
import Search from "./component/Search/Search";
import Loader from "./component/Loader/Loader";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

function App() {
  // all users
  const [users, setUsers] = useState([]);
  // grid or list
  const [showUsers, setUsersView] = useState(true);
   // eslint-disable-next-line
  const [count, setCount] = useState(20);
  // loader
  const [loader, isLoading] = useState(true);
  // count female and male
  const [female, setFemale] = useState(0);
  const [male, setMale] = useState(0);


  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [count]);

  const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then((res) => res.json())
      .then((resp) => {
        setTimeout(() => isLoading(false), 2000);

        if (localStorage.getItem("users") === null) {
          localStorage.setItem("users", JSON.stringify(resp.results));
          setUsers(JSON.parse(localStorage.getItem("users")));
        } else {
          setUsers(JSON.parse(localStorage.getItem("users")));
        }
        countFemaleAndMale(resp.results);
      });
  };

  const showView = (event) => {
    event.preventDefault();
    setUsersView(!showUsers);
  };

  // Feamle and male
  const countFemaleAndMale = (usersList) => {
    const sumUsers = usersList.length;
    // eslint-disable-next-line
    const femaleFilter = usersList.filter((users) => users.gender == "female");
    const female = femaleFilter.length;
    setFemale(female);
    const male = sumUsers - female;
    setMale(male);
  };


  // Search
  const searchNewUsers = (value) => {
    var usersStorige = JSON.parse(localStorage.users);
    // console.log(usersStorige);
    var filterList = usersStorige.filter(
      (user) =>
        user.name.first.toLowerCase().includes(value.toLowerCase()) ||
        user.name.last.toLowerCase().includes(value.toLowerCase())
    );
    setUsers(filterList);
    countFemaleAndMale(filterList);
  };
 

  const buttonRefresh=()=>{
    localStorage.removeItem("users");
    fetchUsers()

  }
  return (
    <>
      <BrowserRouter>
        <Header showView={showView} showUsers={showUsers} buttonRefresh={buttonRefresh} />

        <Route path="/" exact>
          <div className="container">
            {loader ? (
              <Loader loader={loader} />
            ) : (
              <div>
                <Search searchNewUsers={searchNewUsers} />
                <UsersList
                  users={users}
                  showUsers={showUsers}
                  female={female}
                  male={male}
                />
              </div>
            )}
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;

// storeView(view) {
//   localStorage.setItem('view', view)
// }

// storeUsers(users) {
//   localStorage.setItem('users', users)
// }

// storeFetchDate(date) {
//   localStorage.setItem('date', date)
// }

// getStoredData(key) {
//   localStorage.getItem(key)
// }

// removeStoredItem(key) {
//   localStorage.removeItem(key)
// }
// }
