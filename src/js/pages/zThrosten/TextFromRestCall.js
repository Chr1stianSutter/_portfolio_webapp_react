import React from "react";
import { Divider } from 'semantic-ui-react'

// observer einbinden
import { observer } from "mobx-react";

// Nutzen der Button Komponente von Semantic UI
import { Button } from 'semantic-ui-react'

// der Store auf den gehört werden soll, muss eingebunden werden 
import restTextStore from "../stores/restTextStore"

import ShowTextInCard from "../components/ShowTextInCard"

// mit der Annotation @observer ist die Komponente fähig als Observer zu fungieren. 
@observer
export default class TextFromRestCall extends React.Component {
	
	// wenn der Button geklickt wird, dann wird eine Nachricht vom Server geholt. 
	fetchTextFromServer() {
        restTextStore.fetchRandomText();
    }

    // nachdem der neue Text geladen wurde, wird die Komponente neu gerendert.
    render() {
		const {theTextFromRest} = restTextStore;
   	    return (
	      <div>
	        <h1 class="blue-color">Was sagt der Hase? {theTextFromRest}</h1>
	        <Button primary onClick={this.fetchTextFromServer.bind(this)}>
	            Fetch another text via REST
	        </Button>
			<Divider />
	        <ShowTextInCard rabbit='francis'/>
	        <Divider />
	        <ShowTextInCard rabbit='safira'/>
	        <Divider />
	        <ShowTextInCard />
	      </div>
        );
    }
}