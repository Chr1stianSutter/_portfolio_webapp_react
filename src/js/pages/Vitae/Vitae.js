import React from "react";
import { Grid } from 'semantic-ui-react'

import "./style.scss"

export default class CV extends React.Component {
  render() {
    return (
      <div className="page dark">
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
              <h2>
                {"Curriculum Vitae"}
              </h2>
              <div className="divBarDarkCVUnderline"/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
