import React from "react";
import styles from "./Search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({ searchNewUsers }) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 ">
          <div className={styles.searchFavicon}>
          <FontAwesomeIcon icon={faSearch} /> 
          </div> 
          <input
          
            className={styles.input}
            onChange={(event) => searchNewUsers(event.target.value)}
            required
            type="search"
            placeholder="Search users"
          />
        </div>
      </div>
    </div>
  );
}
export default Search;
