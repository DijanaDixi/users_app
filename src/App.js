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
  const [listUsers, setUsersView] = useState("list");
  // eslint-disable-next-line
  // loader
  const [loader, isLoading] = useState(false);
  // count female and male
  const [female, setFemale] = useState(0);
  const [male, setMale] = useState(0);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log(localStorage.getItem("view") !== null);
    if (localStorage.getItem("view")) {
      setUsersView(localStorage.getItem("view"));
    } else {
      setUsersView("list");
    }
    // eslint-disable-next-line
  }, []);

  const fetchUsers = () => {
    isLoading(true);
    if (localStorage.getItem("users") !== null) {
      setUsers(JSON.parse(localStorage.getItem("users")));
      countFemaleAndMale(JSON.parse(localStorage.getItem("users")));
      isLoading(false);
    } else {
      fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp.results);
          isLoading(false);
          localStorage.setItem("users", JSON.stringify(resp.results));
          setUsers(resp.results);
          countFemaleAndMale(resp.results);
        });
    }
  };

  const showView = (event) => {
    event.preventDefault();
    if (listUsers === "grid") {
      setUsersView("list");
      localStorage.setItem("view", "list");
    } else {
      setUsersView("grid");
      localStorage.setItem("view", "grid");
    }
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

  const buttonRefresh = () => {
    localStorage.removeItem("users");
    fetchUsers();
  };
  return (
    <>
      <BrowserRouter>
        <Header
          showView={showView}
          listUsers={listUsers}
          buttonRefresh={buttonRefresh}
        />

        <Route path="/" exact>
          <div className="container">
            {loader ? (
              <Loader loader={loader} />
            ) : (
              <div>
                <Search searchNewUsers={searchNewUsers} />
                <UsersList
                  users={users}
                  listUsers={listUsers}
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
