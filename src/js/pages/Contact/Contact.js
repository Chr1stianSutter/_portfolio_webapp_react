import React from "react";
import { Grid } from 'semantic-ui-react'
import { Button, Form, Segment } from 'semantic-ui-react'

import "./style.scss"

const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Email adress' placeholder='Email adress' />
        <Form.Field
      id='form-textarea-control-message'
      control={TextArea}
      label='Message'
      placeholder='Message'
    />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)

export default class Contact extends React.Component {
  render() {
    return (
      <div className="page light">
        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row>
                <div>
                  <h2>
                    {"Christian Sutter"}
                  </h2>
                  <h1>
                    {"CONTACT"}
                  </h1>
                  <div className="divBarLight"/>
                </div>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12}>
                  <div class="ui">
                    <form class="ui form">
                      <Grid columns="equal">
                        <Grid.Column>
                          <Grid.Row>
                            <div class="equal width fields">
                              <div class="field">
                                <div class="ui fluid input"><input type="text" placeholder="First name" /></div>
                              </div>
                              <div class="field">
                                <div class="ui fluid input"><input type="text" placeholder="Email adress" /></div>
                              </div>
                            </div>
                          </Grid.Row>
                          <Grid.Row>
                            <div class="field">
                              <textarea id="form-textarea-control-opinion" placeholder="Message" rows="12"></textarea>
                            </div>
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column>
                          <Grid.Row>
                            <button type="submit" class="ui inverted red button">Submit</button>
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>

                    </form>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>
      </div>
    );
  }
}
