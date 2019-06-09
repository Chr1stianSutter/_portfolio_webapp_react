import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Logo from "../../../static/logo.jpg";

import "./style.scss"

export default class Layout extends React.Component {
  render() {
    const textStyle = {
      //marginLeft:"35%",
      //marginTop:"5%",

    };

    const myNameStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em"
    };

    const smallTextStyle ={
      fontFamily: 'Montserrat',
      //fontSize:"25pt"
    };

    const divBarStyle = {
      height:"10px",
      width:"150px",
      //marginTop: "30px",
      //marginBottom:"25px",
      backgroundColor:'black'
    }
    const contentWrapper = {
      width: "1024px",
      margin: "0 auto"
    }

    return (
      <div id="__homePage" className="page">
        <div style={textStyle, contentWrapper}>
          <h2 style={smallTextStyle}>{"Hello I'm"}</h2>
          <h1 style={myNameStyle}>
            {"Christian"}<br/>
            {"Sutter"}
          </h1>
          <div style={divBarStyle}></div>
          <h2 style={smallTextStyle}>
            {"I'm a DIGITAL DESIGNER with"}<br />
            {"a focus on UI and USABILITY"}
          </h2>
        </div>
      </div>
    );
  }
}
