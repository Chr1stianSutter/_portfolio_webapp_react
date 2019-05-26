import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import NavigationBarPortfolio from "../components/NavigationBarPortfolio"
import BgImageMe from "../components/BgImageMe";
import Background from "../res/bg.jpg";
import Logo from "../res/logo.jpg";

import LandingPage from "../pages/LandingPage";
//home
import LandingPage2 from "../pages/LandingPage2";

//about me
import AboutMe from "../pages/AboutMe"

//projects
import Projects from "../pages/Projects"
//Project1
import Project1 from "../pages/Project1"
//project2
import Project2 from "../pages/Project2"
//Project3
//
//Project4

//cv
import CV from "../pages/CV"

//contact me
import Contact from "../pages/Contact"




import { observer } from "mobx-react";
import restTextStore from "../stores/restTextStore"



// Require scss files
require('../../stylesheets/_all.scss');

// require LESS files
require('../../stylesheets/initial.less');

// name: '[path][name].[ext]?[hash:8]',



// durch die Annotation @observer
@observer
export default class Layout extends React.Component {
    render() {

        const containerStyle = {
            marginTop: "5px"
        };

        return (

            <HashRouter>
                  <div>
                    <NavigationBarPortfolio location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-xs-12" >

                                <Route exact path="/" component={LandingPage2}/>
                                <Route exact path="/aboutme" component={AboutMe}/>
                                <Route exact path="/projects" component={Projects}/>
                                <Route exact path="/cv" component={CV}/>
                                <Route exact path="/contact" component={Contact}/>
                                <Route exact path="/project1" component={Project1}/>
                                <Route exact path="/project2" component={Project2}/>
                            </div>
                        </div>

                    </div>
                  </div>
          </HashRouter>

        );
    }
}
