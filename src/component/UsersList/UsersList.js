import React from "react";
import User from "../User/User";
import UserGridCard from "../UserGridCard/UserGridCard";
import Error from "../Error/Error";
import styles from "./UsersList.module.css";

function UsersList({ users, listUsers, female, male }) {
  const allUsers = users.map((user) => {
    return listUsers === "list" ? (
      <User user={user} key={user.cell} />
    ) : (
      <UserGridCard user={user} key={user.cell} />
    );
  });

  const usersList = () => {
    return users.length ? <div className="row">{allUsers}</div> : <Error />;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className={styles.male}>
            Male:{male} Female:{female}
          </p>
        </div>
      </div>
      <div className="row">
      <div className={styles.usersContainer}>
        <div>{usersList()}</div>
      </div>
    </div>
    </div>
  );
}
export default UsersList;
