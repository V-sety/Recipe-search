import React, { Component } from "react";
import ApiQuerry from "./subComponents/ApiQuerry";

class Body extends Component {
  constructor() {
    super();
    //add state (arrray of ingridients) which will be rendered on the screen
    this.state = {
      currentIngridient: "",
      arrayOfIngridients: [],
      searched: false,
    };
    this.addI = this.addI.bind(this);
    this.addToArr = this.addToArr.bind(this);
    this.search = this.search.bind(this);
  }
  addToArr() {
    this.setState({
      arrayOfIngridients: [
        ...this.state.arrayOfIngridients,
        this.state.currentIngridient,
      ],
      currentIngridient: "",
    });
    document.getElementsByName("currentIngridient").dangerouslySetInnerHTML =
      "";
  }
  addI(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  search() {
    this.setState({ searched: true });
  }
  render() {
    return (
      <div className="enterElem">
        <h1>List your ingridients:</h1>
        <input
          name="currentIngridient"
          type="text"
          className="searchField"
          value={this.state.currentIngridient}
          placeholder={this.state.currentIngridient}
          onChange={this.addI}
        />{" "}
        <br></br>
        <button className="searchbtn" onClick={this.addToArr}>
          Add ingridient{" "}
        </button>
        <button className="searchbtn" onClick={this.search}>
          Search
        </button>
        <h2>elem: {this.state.currentIngridient}</h2>
        {this.state.arrayOfIngridients.map((index, value) => (
          <h2>
            {" "}
            {value} {index}{" "}
          </h2>
        ))}
        {this.state.searched === true && (
          <ApiQuerry arrayOfIngridients={this.state.arrayOfIngridients} />
        )}
      </div>
    );
  }
}

export default Body;
