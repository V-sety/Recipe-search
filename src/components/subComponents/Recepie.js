import React from "react";

export default function Recepie(props) {
  {
    return (
      <div className="recepie">
        <h2>{props.title}</h2>
        <div className="recCont">
          <img src={props.img} className="image" />
          <ul className="steps">
            {props.recep.map((item) => {
              return item.steps.map((step) => (
                <li className="step">{step.step}</li>
              ));
            })}
          </ul>
        </div>
      </div>
    );
  }
}
