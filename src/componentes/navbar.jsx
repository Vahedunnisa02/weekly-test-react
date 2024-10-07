import styles from "./project.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.navbar}>
        <h3>Aman Kumar Directory App</h3>
      </nav>
      <div className={styles.navigators}>
        <button className={styles.navigatorbtn }onClick={() => navigate("/")}>
          Add New Person
        </button>
        <button className={styles.navigatorbtn} onClick={() => navigate("/retrieve")}>
          Retrieve Infromation
        </button>
      </div>
    </>
  );
}

export default Navbar;
