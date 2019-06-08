import React from "react";
import { Grid } from 'semantic-ui-react'

export default class Contact extends React.Component {
  render() {

    const textStyle = {
      //marginLeft:"12%",
      //marginTop:"5%",

    };

    const textStyleGrid = {
      //marginLeft:"12%",
      //marginTop:"15%",

    };

    const myNameStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em"
    };

    const smallTextStyle ={
      fontFamily: 'Montserrat',
      //fontSize:"20pt"
    };

    const divBarStyle = {
      height:"10px",
      width:"150px",
      //marginTop: "30px",
      //marginBottom:"25px",
      backgroundColor:'black'
    }
    const divBarStyle2 = {
      height:"10px",
      width:"310px",
      //marginTop: "0px",
      //marginBottom:"25px",
      backgroundColor:'black'
    }

    return (

      <div >
        <Grid>
          <Grid.Row>
            <div style={textStyle}>
              <h2 style={smallTextStyle} >
                {"Christian Sutter"}
              </h2>
              <h1 style={myNameStyle}>
                {"CONTACT"}
              </h1>
              <div style={divBarStyle} />
            </div>
          </Grid.Row>
        <Grid.Row style={textStyleGrid}>
          <Grid.Column width={4}>
            <div >
              <h2 style={smallTextStyle}>
                {"cs.design@mail.com"}
              </h2>
              <h2 style={smallTextStyle}>
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
