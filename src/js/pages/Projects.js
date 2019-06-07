import React from "react"
import { Grid, Card } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import placeholder from '../res/image.jpg'

export default class Projects extends React.Component {

  constructor() {
    super();
    this.state = { activeItem : 'Project2' }
  }

  handleItemClick = (e, { name  }) => this.setState({ activeItem: name })

  render() {
  const { activeItem } = this.state

    const myNameStyle = {
      fontSize: "90pt",
      fontFamily: "Montserrat",
      textTransform: "uppercase",
      lineHeight: "0.9em"
    }

    const smallTextStyle = {
      fontFamily: "Montserrat",
      fontSize: "20pt"
    }

    const divBarStyle = {
      height: "10px",
      width: "150px",
      marginTop: "30px",
      marginBottom: "25px",
      backgroundColor: "black"
    }

    const imageInCards = {
      width: "100%",
      height: "auto",
      display: "block"
    }

    return (
      <Grid>
        <Grid.Row>
            <Grid.Column>
              <h2 style={smallTextStyle}>
                {"Christian Sutter"}
              </h2>
              <h1 style={myNameStyle}>
                {"PROJECTS"}
              </h1>
              <div style={divBarStyle}></div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Card.Group itemsPerRow={3}>
              <Card raised>
                <Link to="/project1">
                  <img src={placeholder} alt="placeholder" style={imageInCards} />
                </Link>
              </Card>
              <Card raised>
                <Link to="/project2">
                  <img src={placeholder} alt="placeholder" style={imageInCards} />
                </Link>
              </Card>
              <Card raised>
                <Link to="/project3">
                  <img src={placeholder} alt="placeholder" style={imageInCards} />
                </Link>
              </Card>
            </Card.Group>
        </Grid.Row>
      </Grid>
    );
  }
}
