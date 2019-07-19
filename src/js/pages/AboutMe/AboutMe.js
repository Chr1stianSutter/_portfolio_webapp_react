import React from "react";
import { Grid, Button } from 'semantic-ui-react'

import "./style.scss"

export default class AboutMe extends React.Component {

  handleClick = () => parent.open('https://dmd.hs-weingarten.de/')

  render() {
    return (
      <div className="page dark">
      <Grid comulns="equal">
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
            <Grid>
              <Grid.Row>
                <header>
                  <h2>{"Christian Sutter"}<br /></h2>
                  <h1>
                    {"About Me"}
                  </h1>
                </header>
              </Grid.Row>
              <div className="divBarDark"></div>
            <Grid.Row>
              <Grid.Column width={8}>
                <div >
                  <h2>
                    {"Hi! I'm a graduate from the"}<br/>
                    {"University of Applied Sciences"}<br/>
                    {"Weingarten."}
                  </h2>
                  <h2>
                    {"My major is DMD or digital"}<br/>
                    {"media design, you can check them"}<br/>
                    {"out here:"}
                  </h2>
                  <div>
                    <button class="ui inverted red button"  onClick={this.handleClick} >digitalmediadesign.io</button>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <h2>
                    {"I have a passion for digital"}<br/>
                    {"interfaces, user-centered design,"}<br/>
                    {"bold fonts, and lots of whitespace."}
                  </h2>
                  <h2>
                    {"A problem-solver at heart, with a"}<br/>
                    {"love for all things usability."}
                  </h2>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width ={2}></Grid.Column>
      </Grid>
      </div>
    );
  }
}
