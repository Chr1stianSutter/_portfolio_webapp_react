import React from "react";
import { Grid, Segment } from 'semantic-ui-react'

export default class Project1 extends React.Component {
  render() {


return(

<div>

<Grid columns='equal'>
  <Grid.Column>
    <Segment>
    <div class="column">
      <div class="ui segment">1</div>
    </div>
    </Segment>
  </Grid.Column>
  <Grid.Column width={8}>
    <Segment>
    <div class="eight wide column">
      <div class="ui segment">2</div>
    </div>
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
    <div class="column">
      <div class="ui segment">3</div>
    </div>
    </Segment>
  </Grid.Column>
</Grid>

</div>


);
}
}
