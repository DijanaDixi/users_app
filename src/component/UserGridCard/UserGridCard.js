import React from "react";
import styles from "./UserGridCard.module.css";
import {haideEmail, dateFormat} from "../../utilis/utilis"

function UserGridCard({ user }) {
 
  const check = () => {
    return user.gender === "female"
      ? `card mt-3 shadow p-3 rounded ${styles.female}`
      : "card mt-3 shadow p-3 bg-white rounded";
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className={styles.card}>
        <div className={check()}>
          <img src={user.picture.medium} className="card-img-top" alt="..." />
          <div className="card-body">
          </div>
            <p className="card-text">{haideEmail(user.email)}</p>
            <p className="card-text">Birth date:{dateFormat(user.date)}</p>
        </div>
      </div>
    </div>
  );
}

export default UserGridCard;
