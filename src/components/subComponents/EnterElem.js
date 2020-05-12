import React, { Component } from "react";

const Submit = () => {};

const EnterElem = () => {
  return (
    <div className="enterElem">
      <h1>List your ingridients:</h1>
      <form onSubmit="Submit">
        <input className="searchField" /> <br></br>
        <button className="searchbtn">Add ingridient</button>
      </form>
    </div>
  );
};
export default EnterElem;
