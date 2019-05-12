import React from "react";
import { Grid, Card } from 'semantic-ui-react'

import ProjectCards from '../components/ProjectCards'
import image from '../res/image.jpg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

//test for Router - remove later
import LandingPage2 from "../pages/LandingPage2";
import AboutMe from "../pages/AboutMe";


export default class Projects extends React.Component {
/*
  linkToProject1() {

      console.log("CLICKED-1")

        <div>
          <Link to="/"></Link>
          <Route exact path="/" component={LandingPage2}/>
        </div>


};

linkToProject2() {

    console.log("CLICKED-2")

      <div>
        <Link to="/"></Link>
        <Route exact path="/" component={LandingPage2}/>
      </div>

};

linkToProject3() {

    console.log("CLICKED-3")

      <div>
        <Link to="/"></Link>
        <Route exact path="/" component={LandingPage2}/>
      </div>

};

linkToProject4() {

    console.log("CLICKED-4");

      <div>
        <Link to="/">LINK</Link>
        <Route exact path="/" component={LandingPage2}/>
      </div>
};
*/

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

    const cardImageStyle = {
      width: "400px"
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
<div>
            <div style={cardStyle}>
            <Switch>
              <div class="ui six cards">
                <div class="ui raised card" style={cardImageStyle}>
                  <Link to="/"> <img src={image} style={cardImageStyle}/> </Link>
                </div>
                <div class="ui raised card" style={cardImageStyle}>
                    <Link to="/aboutme"> <img src={image} style={cardImageStyle}/> </Link>
                </div>
                <div class="ui raised card" style={cardImageStyle}>
                    <Link to="/"> <img src={image} style={cardImageStyle}/> </Link>
                </div>
                <div class="ui raised card" style={cardImageStyle}>
                    <Link to="/"> <img src={image} style={cardImageStyle}/> </Link>
                </div>
                <Route exact path='/' component={LandingPage2}></Route>
                <Route exact path='/aboutme' component={AboutMe}></Route>
                  {/*
                    * funny stuff when i put the routes here
                    *   <Route exact path='/' component={LandingPage2}></Route>
                    *   <Route exact path='/aboutme' component={AboutMe}></Route>
                    */}
              </div>


              </Switch>
            </div>


</div>


          </Grid.Row>

        </Grid>
      </div>
    );
  }
}
