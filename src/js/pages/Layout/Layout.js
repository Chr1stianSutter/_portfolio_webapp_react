import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Grid } from "semantic-ui-react"

import "../../../stylesheets/style.scss"
import "./style.scss"

import NavigationBar from "../../components/NavigationBar/NavigationBar"

import HomePage from "../../pages/HomePage/";
import AboutMe from "../../pages/AboutMe/AboutMe"
import Projects from "../../pages/Projects/Projects"
import Project1 from "../../pages/Projects/Project1/Project1"
import Project2 from "../../pages/Projects/Project2/Project2"
import Project3 from "../../pages/Projects/Project3/Project3"
import Vitae from "../../pages/Vitae/Vitae"
import Contact from "../../pages/Contact/Contact"

export default class Layout extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar location={location} />
            <div>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/aboutme" component={AboutMe}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/cv" component={Vitae}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/project1" component={Project1}/>
                <Route exact path="/project2" component={Project2}/>
                <Route exact path="/project3" component={Project3}/>
              </Switch>
            </div>
        </div>
      );
    }
}
