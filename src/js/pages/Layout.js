import React from "react"
import { HashRouter, Route } from 'react-router-dom';
import { observer } from "mobx-react";

import NavigationBar from "../components/NavigationBar"

import MobxInteraction from "../pages/MobxInteraction"
import TextFromRestCall from "../pages/TextFromRestCall"
import Cars from "../pages/Cars"

import { Segment } from 'semantic-ui-react'

// der Store
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
                    <Segment><h1>Die interaktive Hasen-und Auto WebApp mit MobX.</h1></Segment>
                    <NavigationBar location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-xs-12">
                                <Route exact path="/mobxinteraction" component={MobxInteraction}/>
                                <Route exact path="/textfromrestcall" component={TextFromRestCall}/>
                                <Route exact path="/cars" component={Cars}/>
                                <Route exact path="/tabletest" component={TableTest}/>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
