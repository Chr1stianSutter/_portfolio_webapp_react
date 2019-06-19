import React from "react";
import { Grid , Button} from 'semantic-ui-react'

import "./style.scss"

export default class CV extends React.Component {
  render() {
    return (
      <div className="page dark">


      <Grid comulns="equal">
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Grid>
            <Grid.Row>
              <div>
                <h2>
                  {"Christian Sutter"}
                </h2>
                <h1>
                  {"CURRICULUM"}<br/>
                  {"VITAE"}
                </h1>
                <div className="divBarDark"/>
              </div>
            </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <div >
                <h2>
                  {"Want to download my CV?"}
                </h2>
                <h2>
                  {"Here you go:"}
                </h2>
                <div>
                  <button class="ui inverted red button">Download Curriculum Vitae</button>
                </div>
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
