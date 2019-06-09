import React from "react";
import { Grid } from 'semantic-ui-react'

export default class AboutMe extends React.Component {
  render() {
    const background ={
      backgroundColor: 'black'
    };

    const textStyle = {
      color:"white"

    };

    const textStyleGrid = {
      color: "white"

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
      backgroundColor:'white'
    }
    const divBarStyle2 = {
      height:"10px",
      width:"310px",
      //marginTop: "0px",
      //marginBottom:"25px",
      backgroundColor:'white'

    };
      const backgroundStyle = {
        //backgroundImage: path("../res/bg.jpg"),
        //height: "100%",
        //width: "100%",
        //position: "fixed",
        //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };

    return (

      <div style={background}>
        <Grid>
          <Grid.Row>
          <div style={textStyle}>
            <h2 style={smallTextStyle} >
              {"Christian Sutter"}
            </h2>
            <h1 style={myNameStyle}>
              {"ABOUT ME"}
            </h1>
            <div style={divBarStyle}></div>
          </div>
          </Grid.Row>
        <Grid.Row style={textStyleGrid}>
          <Grid.Column width={4}>
            <div >
              <h2 style={smallTextStyle}>
                {"Hi! I'm a graduate from the<br/>University of Applied Sciences"}<br/>
                {"Weingarten."}
              </h2>
              <h2 style={smallTextStyle}>
                {"My major was DMD or digital"}<br/>
                {"media design, you can check them"}<br/>
                {"out here:"}
              </h2>
              <h2 style ={smallTextStyle}>
                {"digitalmediadesign.io"}
              </h2>
              <div style={divBarStyle2}></div>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <div>
              <h2 style={smallTextStyle}>
                {"I have a passion for digital"}<br/>
                {"interfaces, user-centered design,"}<br/>
                {"bold fonts, and lots of whitespace."}
              </h2>
              <h2 style={smallTextStyle}>
                {"A problem-solver at heart, with a"}<br/>
                {"love for all things usability."}
              </h2>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
