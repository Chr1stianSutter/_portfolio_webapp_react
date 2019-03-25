import React from "react";
import { Grid, Image } from 'semantic-ui-react'
import RabbitSwitch from '../components/RabbitSwitch'
import RabbitCards from '../components/RabbitCards'

export default class MobxInteraction extends React.Component {
  render() {
    return (
      <div>
        <Grid celled>
        <Grid.Row>
      		<Grid.Column width={6}>
      			<RabbitSwitch />
      		</Grid.Column>
      		<Grid.Column width={6}>
        		<RabbitCards />
      		</Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    );
  }
}
