import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Grid } from "semantic-ui-react"

import NavigationBar from "../components/NavigationBar"
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe"
import Projects from "../pages/Projects"
import Project1 from "../pages/Project1"
import Project2 from "../pages/Project2"
import Project3 from "../pages/Project3"
import Vitae from "../pages/CV"
import Contact from "../pages/Contact"

export default class Layout extends React.Component {
    render() {
      const navigationBarSpacing = {
        marginTop: "130px"
      }
        return (
          <div>
            <NavigationBar location={location} />
              <div style={navigationBarSpacing}>
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
