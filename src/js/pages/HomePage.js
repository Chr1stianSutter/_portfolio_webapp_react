import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Background from "../res/bg.jpg";
import Logo from "../res/logo.jpg";

export default class Layout extends React.Component {
  render() {

    const backgroundStyle = {
      //height: "100%",
      //position: "fixed",
      //backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

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
      <div>
        <img src={Background} style={backgroundStyle} />
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
