import React from "react";
import { Grid } from 'semantic-ui-react'

export default class CV extends React.Component {
  render() {

    const textStyle = {
      position: 'absolute',
      marginLeft:"12%",
      marginTop:"5%",

    };

    const textStyleGrid = {
      position: 'absolute',
      marginLeft:"12%",
      marginTop:"20%",

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
      width:"250px",
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
            <h1 style={myNameStyle}>CURRICULUM<br/>VITAE</h1>
            <div style={divBarStyle}></div>
          </div>
          </Grid.Row>
        <Grid.Row style={textStyleGrid}>
        <Grid.Column width={5}>
          <div >
            <h2 style={smallTextStyle}>Want to download my CV?</h2>
            <h2 style={smallTextStyle}>Here you go:</h2>
            <h2 style ={smallTextStyle}>Curriculum Vitae</h2>
            <div style={divBarStyle2}></div>
          </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
