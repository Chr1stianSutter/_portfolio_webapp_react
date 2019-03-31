import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import NavigationBarPortfolio from "../components/NavigationBarPortfolio"
import BgImageMe from "../components/BgImageMe";
import Background from "../res/bg.jpg";
import Logo from "../res/logo.jpg";
//about me
import MobxInteraction from "../pages/MobxInteraction"

//projects
import TextFromRestCall from "../pages/TextFromRestCall"

//cv
import Cars from "../pages/Cars"

//contact me
import TableTest from "../pages/TableTest"


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
        const backgroundStyle = {
          //backgroundImage: path("../res/bg.jpg"),
          height: "100%",
          //width: "100%",
          position: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        };



        return (
            <HashRouter>
                <div>

                    <NavigationBarPortfolio location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-xs-12">
                                
                                <Route exact path="/aboutme" component={MobxInteraction}/>
                                <Route exact path="/projects" component={TextFromRestCall}/>
                                <Route exact path="/cv" component={Cars}/>
                                <Route exact path="/contact" component={TableTest}/>
                            </div>
                        </div>
                    </div>

                    <img src= {Background} style={backgroundStyle}/>

                </div>
            </HashRouter>
        );
    }
}
