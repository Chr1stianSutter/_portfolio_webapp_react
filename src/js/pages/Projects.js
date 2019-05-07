import React from "react";
import { Grid } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import ProjectCards from '../components/ProjectCards'
import image from '../res/image.jpg';


export default class Projects extends React.Component {
  render() {



    const textStyle = {
      position: 'absolute',
      marginLeft:"12%",
      marginTop:"5%",


    };

    const cardStyle = {
      position: 'absolute',
      marginLeft:"12%",
      marginTop:"15%",

    };

    const myNameStyle={
      fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em"
    };

    const smallTextStyle ={
      fontFamily: 'Montserrat',
      fontSize:"20pt"
    };

    const divBarStyle = {
      height:"10px",
      width:"150px",
      marginTop: "30px",
      marginBottom:"25px",
      backgroundColor:'black'
    }
    const divBarStyle2 = {
      height:"10px",
      width:"310px",
      marginTop: "0px",
      marginBottom:"25px",
      backgroundColor:'black'
    }

    return (

      <div >
        <Grid>
          <Grid.Row>
          <div style={textStyle}>
            <h2 style={smallTextStyle} >Christian Sutter</h2>
            <h1 style={myNameStyle}> PROJECTS</h1>
            <div style={divBarStyle}></div>
          </div>
          </Grid.Row>
          <Grid.Row>
            <div style={cardStyle}>
              <div class="ui five cards">
                <div class="ui raised card">
                  <div class="image"><img src={image} /></div>
                </div>
                <div class="ui raised card">
                  <div class="image"><img src={image} /></div>
                </div>
                <div class="ui raised card">
                  <div class="image"><img src={image} /></div>
                </div>
                <div class="ui raised card">
                  <div class="image"><img src={image} /></div>
                </div>
              </div>
            </div>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}
