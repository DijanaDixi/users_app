import React from "react";
import styles from "./User.module.css";
import { faEnvelope,faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {haideEmail, dateFormat} from "../../utilis/utilis"

function User({ user }) {
 
  const check = () => {
    return user.gender === "female"
      ? `card mt-3 shadow p-3 rounded ${styles.female}`
      : "card mt-3 shadow p-3 bg-white rounded";
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-10 offset-1">
      <div className={check()}>
        <div className="row">
          <div className="col-xs-4 col-4">
            <img className={styles.small} src={user.picture.medium} alt="img" />
          </div>
          <div className="col-xs-8 col-8">
            <div className={styles.about}>
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                {` email: ${haideEmail(user.email)}`}
              </p>

              <p>
              <FontAwesomeIcon icon={faBirthdayCake} />
              {`  Date:${dateFormat(user.date)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
