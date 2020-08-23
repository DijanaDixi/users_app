import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { faRedoAlt, faListUl, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ showView, showUsers,buttonRefresh}) {
  return (
    <div className={styles.headerContainer}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
      <Link to="/" className={styles.header}>
        USERS
      </Link>

      <Link to="/about" className={styles.about}>
        About
      </Link>

      {showUsers ? (
        <button onClick={showView} type="button">
          <FontAwesomeIcon
            icon={faListUl}
            className={styles.colorFavicon}
          />
        </button>
      ) : (
        <button onClick={showView} type="button">
          <FontAwesomeIcon
            icon={faTh}
            className={styles.colorFavicon}
          />
        </button>
      )}
      <button onClick={()=>{buttonRefresh()}}type="button">
      {/* <button onClick={() => window.location.reload(true)} type="button"> */}
        <FontAwesomeIcon
          icon={faRedoAlt}
          className={styles.colorFavicon}
        />
      </button>
    </nav>
    </div>
  );
}

export default Header;
