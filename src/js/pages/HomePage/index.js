import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import Logo from "../../../static/logo.jpg";

import "./style.scss"

export default class Layout extends React.Component {
  render() {
    return (
      <div id="__homePage" className="page">
      <Grid comulns="equal">
        <Grid.Column width={6}></Grid.Column>
        <Grid.Column width={8}>
        <div className="text">
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
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
      </div>
    );
  }
}
