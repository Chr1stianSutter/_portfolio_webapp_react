import React from "react";
import { Grid } from 'semantic-ui-react'

import "./style.scss"

export default class Contact extends React.Component {
  render() {
    return (
      <div className="page light">
        <Grid>
          <Grid.Row>
            <div>
              <h2>
                {"Christian Sutter"}
              </h2>
              <h1>
                {"CONTACT"}
              </h1>
              <div className="divBarLight"/>
            </div>
          </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <div >
              <h2>
                {"cs.design@mail.com"}
              </h2>
              <h2>
                {"+49 (0) 178 50 18 205"}
              </h2>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
