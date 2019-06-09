import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Logo from "../../../static/logo.jpg";

import "./style.scss"

export default class Layout extends React.Component {
  render() {
    return (
      <div id="__homePage" className="page">
        <div>
          <h2>{"Hello I'm"}</h2>
          <h1>
            {"Christian"}<br/>
            {"Sutter"}
          </h1>
          <div></div>
          <h2>
            {"I'm a DIGITAL DESIGNER with"}<br />
            {"a focus on UI and USABILITY"}
          </h2>
        </div>
      </div>
    );
  }
}
