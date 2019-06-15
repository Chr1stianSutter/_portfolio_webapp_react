import React from "react"
import { Grid, Card } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import placeholder from '../../../static/image.jpg'

import "./style.scss"

export default class Projects extends React.Component {

  constructor() {
    super();
    this.state = { activeItem : 'Project2' }
  }

  handleItemClick = (e, { name  }) => this.setState({ activeItem: name })

  render() {
  const { activeItem } = this.state
    return (

      <Grid comulns="equal">
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
        <div id="__projects" className="page light projects">
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h2>
                  {"Christian Sutter"}
                </h2>
                <h1>
                  {"PROJECTS"}
                </h1>
                <div className="divBarLight"></div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Card.Group itemsPerRow={3}>
                <Card raised>
                  <Link to="/project1">
                    <img src={placeholder} alt="placeholder" />
                  </Link>
                </Card>
                <Card raised>
                  <Link to="/project2">
                    <img src={placeholder} alt="placeholder" />
                  </Link>
                </Card>
                <Card raised>
                  <Link to="/project3">
                    <img src={placeholder} alt="placeholder" />
                  </Link>
                </Card>
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
        </Grid.Column>
        <Grid.Column width ={2}></Grid.Column>
      </Grid>
    );
  }
}
