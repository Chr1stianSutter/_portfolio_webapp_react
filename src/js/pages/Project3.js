import React from "react";
import { Grid, Segment, Card} from 'semantic-ui-react'
import image from '../res/image.jpg';

export default class Project3 extends React.Component {
  render() {

    const bigTextStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      //position: "absolute",
      //marginLeft:"20px"
    };

    const gridStyle = {
      //backgroundColor:"red"
    }

    const bigTextStyleGuideStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      //position: "absolute",
      //marginTop: "200px"
    };

    const bigTextNavigationStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      //position: "absolute",
      //marginTop: "120px",
      //marginBottom:"50px"
    };

    const bigTextCall2ActionStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      //position: "absolute",
      //marginTop: "220px",
      //marginBottom:"50px"
    };

    const bigTextUsersStyle={
      //fontSize:"90pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      //position: "absolute",
      //marginTop: "120px",
      textAlign: "right",

    };

    const smallTextStyle ={
      fontFamily: 'Montserrat',
      //fontSize:"20pt"
    };

    const smallTextStyleRight ={
      fontFamily: 'Montserrat',
      //fontSize:"20pt",
      textAlign:"right"
    };

    const mottoStyleRight ={
      fontFamily: 'Montserrat',
      //fontSize:"48pt",
      textAlign:"left",
      //position:"absolute",
      //width: "100%",
      //marginTop:"350px",
      //marginRight:"0px",
      //marginLeft:"450px"

    };

    const smallTextStyleFloat ={
      fontFamily: 'Montserrat',
      //fontSize:"18pt",
      textTransform:"none",
      //position:"absoulte"
    };

    const smallTextStyleFloatRight ={
      fontFamily: 'Montserrat',
      //fontSize:"18pt",
      textTransform:"none",
      //position:"absoulte",
      textAlign:"right"
    };

    const smallTextStyleFloatLeft ={
      fontFamily: 'Montserrat',
      //fontSize:"18pt",
      textTransform:"none",
      //position:"absoulte",
      textAlign:"left"
    };


    const smallTextStyleTypefaceA ={
      fontFamily: 'Montserrat',
      //fontSize:"18pt",
      textTransform:"none"
    };


    const divBarStyle = {
      height:"10px",
      width:"150px",
      //marginTop: "30px",
      //marginBottom:"25px",
      backgroundColor:'black'
    }

    const divBarStyleRight = {
      height:"10px",
      width:"150px",
      //marginTop: "30px",
      //marginBottom:"25px",
      backgroundColor:'black',
      //marginLeft:"auto",
      //marginRight:"0",
      //float:"right"
    }

    const cardImageStyle = {
      //height: "600px",
      //width: "100%",
      //marginTop:"65px"
    };

    const cardImageStyleTwoSmall = {
      //height: "400px",
      //width: "100%",
      //marginTop:"65px"
    };

    const hugeBgTextStyle = {
      //fontSize:"240pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      letterSpacing: "0.05em",
      color: "gray",
      opacity: "0.1",
      //marginBottom: "350px"
    }

    const hugeBgTextStyleNavigation = {
      //fontSize:"240pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      letterSpacing: "0.05em",
      color: "gray",
      opacity: "0.1",
      //marginBottom: "50px"
    }


    const hugeBgTextStyleRight = {
      //fontSize:"240pt",
      fontFamily: 'Montserrat',
      textTransform:"uppercase",
      lineHeight:"0.9em",
      letterSpacing: "0.05em",
      color: "gray",
      opacity: "0.1",
      textAlign: "right",
      //marginBottom: "650px"
    }

    const absoluteStyle = {
      //position:"absolute",
      textAlign: "right",
      //backgroundColor: "red",
      //width: "98%",
      //display: "block",
      //marginRight:"20px"
    };

    const wrapperStyle = {
      width: "100%",
    }
    const ulSyle = {
      direction:"rtl"
    }

    const spacerDiv = {
      //height: "50px"
    };

    const insetStyle = {
      //marginTop:"30px",
      //marginRight: "10px",
      //marginBottom: "70px",
      inlineStyle:"block",
      float: "left",
      shapeOutside:"inset(0px)",
      clipPath:"inset(0px)",
      //width:"150px",
      //height:"150px",
      backgroundColor:"black"
    }

    return(

      <div>
        <Grid columns='equal' >
          <Grid.Column>
            <div class="column" />
          </Grid.Column>
          <Grid.Column width={8} style = {gridStyle}>
            <div class="eight wide column">
                <h2 style={smallTextStyle}>
                  {"Projects:"}
                </h2>
                <h1 style={bigTextStyle}>
                  {"SEGWAY"}<br/>
                  {"UI"}
                  <div style={divBarStyle} />
                  <h2 style={smallTextStyleFloat}>
                    {"A tablet interface mounted on"}<br/>
                    {"a segway to provide the user"}<br/>
                    {"with a multitude of features"}
                  </h2>
                </h1>
                <img src={image} style={cardImageStyle}/>
                {/*<div style={spacerDiv} />*/}
            </div>
            <Grid.Column>
              <div class="column" />
            </Grid.Column>
            <Grid columns='equal'>
              <Grid.Column width={8}>
                <div class="eight wide column">
                    <img src={image} style={cardImageStyle}/>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div class="four wide column">
                  <h1 style={bigTextStyle}>
                    {"*NAME*"}
                    <div style={divBarStyle} />
                      <h2 style={smallTextStyleFloat}>
                        {"Lorem ipsum dolor sit amet, consetetur"}<br/>
                        {"sadipscing elitr, sed diam nonumy"}<br/>
                        {"eirmod tempor invidunt ut labore et"}<br/>
                        {"dolore magna aliquyam erat."}<br/>
                        <br/>
                        {"At vero eos et accusam et justo duo"}<br/>
                        {"dolores et ea rebum. Stet clita kasd"}<br/>
                        {"gubergren."}
                      </h2>
                  </h1>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <div class="column" />
          </Grid.Column>
        </Grid>
        <Grid style = {gridStyle}>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <h2 style={bigTextStyleGuideStyle}>
              {"Style Guide"}
              <div style={divBarStyle} />
              <h2 style = {smallTextStyle}>
              {"Color"}
              </h2>
              <Grid.Column>
                <div style={insetStyle} />
                <div style={insetStyle} />
                <div style={insetStyle} />
                <div style={insetStyle} />
                <div style={insetStyle} />
              </Grid.Column>
              <h2 style = {smallTextStyle}>
                {"Typefaces"}
              </h2>
              <Grid columns='equal' >
                <Grid.Column width={8} style = {gridStyle}>
                  <h2 style = {smallTextStyleFloat}>
                    {"Futura - Bold"}
                    <div style={divBarStyle} />
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                    {"abcdefghijklmnopqrstuvwxyz"}<br/>
                    {"0123456789"}
                  </h2>
                </Grid.Column>
                <Grid.Column width={8}>
                  <h2 style = {smallTextStyleFloat}>
                    {"Helvetica - Regular"}
                    <div style={divBarStyle} />
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                    {"abcdefghijklmnopqrstuvwxyz"}<br/>
                    {"0123456789"}
                  </h2>
                </Grid.Column>
              </Grid>
            </h2>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={2} />
          <Grid.Column width={8}>
            <h1 style={hugeBgTextStyle}>
              {"Style"}<br/>
              {"Guide"}
            </h1>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column width={8} style = {gridStyle}>
            <div style = {absoluteStyle}>
              <h2 style={bigTextUsersStyle}>
                {"Users"}
              </h2>
              <div style={divBarStyleRight} />
              <Grid columns='equal'>
                <Grid.Column width={8}>
                  <img src={image} style={cardImageStyle}/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <h2 style = {smallTextStyleRight}>
                  {"Needs"}
                  </h2>
                  <h1 style={smallTextStyleRight}>
                    <ul style = {ulSyle}>
                      <li>
                        {"test 1"}
                      </li>
                      <li>
                        {"test 2"}
                      </li>
                      <li>
                        {"test 3"}
                      </li>
                      <li>
                        {"test 4"}
                      </li>
                    </ul>
                  </h1>
                <h2 style = {smallTextStyleRight}>
                  {"Motto"}
                </h2>
              </Grid.Column>
                <h2 style = {mottoStyleRight}>
                  {"I want to make use of"}<br/>
                  {"positive affirmations to"}<br/>
                  {"further my growth!"}
                </h2>
              </Grid>
            </div>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={6} />
          <Grid.Column width={8}>
            <h1 style={hugeBgTextStyleRight}>
              {"Users"}
            </h1>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column width={8} style = {gridStyle}>
            <div style = {absoluteStyle}>
              <h2 style={bigTextUsersStyle}>
                {"Causes"}
              </h2>
              <div style={divBarStyleRight} />
              <h2 style = {smallTextStyleRight}>
                {"What causes unhealthy weight?"}
              </h2>
              <div style={spacerDiv} />
                <Grid columns='equal'>
                  <Grid.Column width={8}>
                    <img src={image} style={cardImageStyleTwoSmall}/>
                    <h2 style={smallTextStyleFloat}>
                      <br/>
                      <br/>
                      {"Lorem ipsum dolor sit amet, consetetur"}<br/>
                      {"sadipscing elitr, sed diam nonumy"}<br/>
                      {"eirmod tempor invidunt ut labore et"}<br/>
                      {"dolore magna aliquyam erat."}
                    </h2>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h2 style={smallTextStyleFloatLeft}>
                      {"Lorem ipsum dolor sit amet, consetetur"}<br/>
                      {"sadipscing elitr, sed diam nonumy"}<br/>
                      {"eirmod tempor invidunt ut labore et"}<br/>
                      {"dolore magna aliquyam erat."}
                      <br/>
                      <br/>
                      <br/>
                    </h2>
                    <img src={image} style={cardImageStyleTwoSmall}/>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={6} />
            <Grid.Column width={8}>
              <h1 style={hugeBgTextStyleRight}>
                {"Causes"}
              </h1>
            </Grid.Column>
          </Grid>
          {/*<div style={spacerDiv} />*/}
          {/*<div style={spacerDiv} />*/}
          {/*<div style={spacerDiv} />*/}
          <Grid style = {gridStyle}>
            <Grid.Column width={4} />
            <Grid.Column width={8}>
              <h2 style={bigTextCall2ActionStyle}>
                {"Call to Action"}
                <div style={divBarStyle} />
                <h2 style = {smallTextStyle}>
                  {"*Title*"}
                </h2>
              </h2>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={2} />
            <Grid.Column width={11}>
              <h1 style={hugeBgTextStyleNavigation}>
                {"Call to"}<br/>
                {"action"}
              </h1>
            </Grid.Column>
          </Grid>
          <Grid columns='equal'>
            <Grid.Column>
              <div class="column" />
            </Grid.Column>
            <Grid.Column width={8}>
            <Grid columns='equal'>
              <Grid.Column width={8}>
                <div class="eight wide column">
                  <h2 style={smallTextStyleFloatRight}>
                    {"Lorem ipsum dolor sit amet, consetetur"}<br/>
                    {"sadipscing elitr, sed diam nonumy"}<br/>
                    {"eirmod tempor invidunt ut labore et"}<br/>
                    {"dolore magna aliquyam erat."}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </h2>
                  <img src={image} style={cardImageStyleTwoSmall}/>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div class="four wide column">
                  <img src={image} style={cardImageStyleTwoSmall}/>
                  <h2 style={smallTextStyleFloat}>
                    <br/>
                    <br/>
                    <br/>
                    {"Lorem ipsum dolor sit amet, consetetur"}<br/>
                    {"sadipscing elitr, sed diam nonumy"}<br/>
                    {"eirmod tempor invidunt ut labore et"}<br/>
                    {"dolore magna aliquyam erat."}
                  </h2>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <div class="column" />
          </Grid.Column>
        </Grid>
      {/*<div style={spacerDiv} />*/}
      {/*<div style={spacerDiv} />*/}
      {/*<div style={spacerDiv} />*/}
        <Grid style = {gridStyle}>
          <Grid.Column width={4} />
          <Grid.Column>
            <h2 style={bigTextNavigationStyle}>
              {"*Name*"}
              <div style={divBarStyle} />
              <h2 style = {smallTextStyle}>
                {"A stylish and green way of"}<br/>
                {"transportation!"}
              </h2>
            </h2>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={2} />
          <Grid.Column width={8}>
            <h1 style={hugeBgTextStyleNavigation}>
              {"*Name*"}
            </h1>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' >
          <Grid.Column>
            <div class="column" />
          </Grid.Column>
          <Grid.Column width={8} style = {gridStyle}>
            <div class="eight wide column">
              <img src={image} style={cardImageStyle}/>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div class="column" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
