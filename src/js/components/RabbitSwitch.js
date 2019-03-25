import React from "react";

// Cards und Images und Icons importieren 
import { Button } from 'semantic-ui-react'

// observer einbinden
import { observer } from "mobx-react";

// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

// mit der Annotation @observer ist die Komponente fähig als Observer zu fungieren. 
@observer
export default class RabbitSwitch extends React.Component {
	 constructor(props) {
      super(props); 
      this.state = { selectedRabbit : '' }
   }

   francisPressed(e) {
      mobxInteractionStore.selectRabbit('francis'); 
      this.setState( { selectedRabbit : 'francis' }); 
   }

   safiraPressed(e) {
      mobxInteractionStore.selectRabbit('safira'); 
      this.setState( { selectedRabbit : 'safira' }); 
   }

   coolrabbitPressed(e) {
      mobxInteractionStore.selectRabbit('coolrabbit'); 
      this.setState( { selectedRabbit : 'coolrabbit' }); 
   }

    render() {
        const selectedRabbit = this.state.selectedRabbit; 
   	    return (
	      <div>
   			   <Button.Group vertical >
             <Button active={ selectedRabbit=='francis' ? true : false } onClick={ this.francisPressed.bind(this) }>Francis</Button>
             <Button active={ selectedRabbit=='safira' ? true : false } onClick={ this.safiraPressed.bind(this) }>Safira</Button>
             <Button active={ selectedRabbit=='coolrabbit' ? true : false }onClick={ this.coolrabbitPressed.bind(this) }>CoolBunny</Button>
            </Button.Group>
	      </div>
        );
    }
}