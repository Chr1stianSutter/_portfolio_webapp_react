import React from "react";
import { Grid, Segment, Card } from 'semantic-ui-react'
import image from '../res/image.jpg';

export default class Project1 extends React.Component {
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
        <h1 style={bigTextStyle}>SEGWAY <br/>UI
          <div style={divBarStyle}></div>
          <h2 style={smallTextStyleFloat}>A tablet interface mounted on <br/>a segway to provide the user <br/>with a multitude of features</h2>
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

        <h1 style={bigTextStyle}>*NAME*
          <div style={divBarStyle}></div>
          <h2 style={smallTextStyleFloat}>
          Lorem ipsum dolor sit amet, consetetur <br/>
          sadipscing elitr, sed diam nonumy <br/>
          eirmod tempor invidunt ut labore et <br/>
          dolore magna aliquyam erat. <br/>
          <br/>
          At vero eos et accusam et justo duo <br/>
          dolores et ea rebum. Stet clita kasd <br/>
          gubergren.</h2>
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

</div>


);
}
}
