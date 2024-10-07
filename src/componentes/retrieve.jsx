import styles from "./project.module.css";
import React,  { useState, useRef } from 'react'


const Retrieve = () => {
  const [retrieveUserData, setRetrieveUserData] = useState([]);
  const findRef = useRef();
  function handleFind(e) {
    e.preventDefault();
    const findinput = findRef.current.value;
    const sessionData = JSON.parse(localStorage.getItem("user"));
    if (sessionData === null) {
      setRetrieveUserData([]);
    } else {
      const searchedResult = sessionData.filter(
        (item) => item.Aadhar_Number === findinput
      );
      if (searchedResult.length > 0) {
        setRetrieveUserData(searchedResult);
      } else {
        setRetrieveUserData("");
      }
    }
  }
  return (
    <>
      <div className={styles.Retrieve}>
        <div>
          <h4 className={styles.pagetitle}>Retrieve Information</h4>
        </div>
        <div className={styles.find}>
          <form className={styles.findform} onSubmit={(e) => handleFind(e)}>
            <input
              className={styles.searchaadhar}
              type="number"
              ref={findRef}
              min="100000000000"
              max="999999999999"
              required
            />
            <input type="submit" className={styles.findbtn} value="Find" />
          </form>
        </div>
        <div className={styles.result}>
          {retrieveUserData === "" ? (
            <h1 style={{ textAlign: "center" }}>No Data Found</h1>
          ) : retrieveUserData.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>No Data</h1>
          ) : (
            retrieveUserData.map((item) => {
              return (
                <div
                  style={{ border: "1px solid black" }}
                  key={item.Aadhar_Number}
                >
                  <p>Name :{item.Name}</p>
                  <p>DOB :{item.Date_of_birth}</p>
                  <p>Aadhar :{item.Aadhar_Number} </p>
                  <p>Mobile no. :{item.Mobile_Number}</p>
                  <p>Age :{item.Age}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Retrieve;
