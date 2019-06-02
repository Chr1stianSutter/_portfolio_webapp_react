import React from "react";
import { Grid, Segment, Card } from 'semantic-ui-react'
import image from '../res/image.jpg';

export default class ProjectsFirstTextBlock extends React.Component {
  render() {

    const bigTextStyle={
      fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      position: "absolute",
      marginLeft:"20px"
    };

    const smallTextStyle ={
      fontFamily: 'Montserrat',
      fontSize:"20pt"
    };

    const smallTextStyleFloat ={
      fontFamily: 'Montserrat',
      fontSize:"20pt",
      textTransform:"none"
    };

    const divBarStyle = {
      height:"10px",
      width:"150px",
      marginTop: "30px",
      marginBottom:"25px",
      backgroundColor:'black'
    }

    const cardImageStyle = {
      height: "600px",
      width: "100%",
      //marginTop:"65px"
    };

    const hugeBgTextStyle = {
      fontSize:"240pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      letterSpacing: "0.05em",
      position: "absolute",
      color: "gray",
      opacity: "0.05"
    }

    const spacerDiv = {
      height: "50px"
    }

return(

<div>

<Grid columns='equal'>
  <Grid.Column>

    <div class="column">

    </div>

  </Grid.Column>
  <Grid.Column width={8}>

    <div class="eight wide column">
        <h2 style={smallTextStyle}>PROJETCS:</h2>
        <h1 style={bigTextStyle}>
        {projectType}
          <div style={divBarStyle}></div>
          <h2 style={smallTextStyleFloat}>
            {projectDescription0}
          </h2>
        </h1>
        <img src={image} style={cardImageStyle}/>
        <div style={spacerDiv}></div>
    </div>

    <Grid columns='equal'>
    <Grid.Column width={8}>

    <div class="eight wide column">
        <img src={image} style={cardImageStyle}/>
    </div>

    </Grid.Column>
    <Grid.Column width={8}>

    <div class="four wide column">

        <h1 style={bigTextStyle}>
          {projectName}
          <div style={divBarStyle}></div>
          <h2 style={smallTextStyleFloat}>
            {projectDescription1}
          </h2>
        </h1>
    </div>

    </Grid.Column>
    </Grid>
  </Grid.Column>
  <Grid.Column>

    <div class="column">

    </div>

  </Grid.Column>
</Grid>
<Grid>
  <Grid.Column width={2}></Grid.Column>
  <Grid.Column width={8}>
    <h1 style={hugeBgTextStyle}>
      Style<br/>
      Guide
    </h1>
  </Grid.Column>

</Grid>

</div>


);
}
}
