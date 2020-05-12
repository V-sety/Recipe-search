/* eslint-disable import/first */
import React from "react";
import dotenv, { config } from "dotenv";
dotenv.config();
import Recepie from "./Recepie";

export default class ApiQuerry extends React.Component {
  state = {
    isLoading: true,
    recep: {},
    recImg: "",
    recTitle: "",
  };

  async componentDidMount() {
    const ingridients = this.props.arrayOfIngridients.join(", ");
    const key = process.env.REACT_APP_API_KEY; //"8e4842f5fc294d84a584a7190f08ef2f";
    let response1 = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${ingridients}&number=10&includeInstruction=true`
    );
    let recepiesNumber = Math.floor(Math.random() * 10);
    response1 = await response1.json();
    const image = response1[recepiesNumber].image;
    const id = response1[recepiesNumber].id;
    const title = response1[recepiesNumber].title;
    console.log(response1[recepiesNumber]);
    console.log(id);
    console.log(image);
    let response2 = await fetch(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`
    );
    response2 = await response2.json();
    this.setState({
      recep: response2,
      isLoading: false,
      recImg: image,
      recTitle: title,
    });
  }
  render() {
    {
      return (
        <div>
          {this.state.isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <Recepie
              recep={this.state.recep}
              title={this.state.recTitle}
              img={this.state.recImg}
            />
          )}
        </div>
      );
    }
  }
}
