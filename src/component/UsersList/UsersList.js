import React from "react";
import User from "../User/User";
import UserGridCard from "../UserGridCard/UserGridCard";
import Error from "../Error/Error"
import styles from "./UsersList.module.css"


function UsersList({ users,showUsers,female,male}) {

  const allUsers = users.map((user) => {
    if (showUsers) {
      return <User user={user} key={user.cell}/>;
    } else{
      return <UserGridCard user={user} key={user.cell}/>;
    }
  });

  return (
    <div className={styles.usersContainer}>
      <div><p className={styles.male}>Male:{male} Female:{female}</p></div>
      {(users.length)?<div className="row">{allUsers}</div>:
    <Error/>}
    </div>
  );
}
export default UsersList;
