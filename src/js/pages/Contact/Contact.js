import React from "react";
import { Grid } from 'semantic-ui-react'
import { Button, Form, Segment } from 'semantic-ui-react'

import "./style.scss"

const FormExampleInverted = () => (
  <Segment inverted>
    <form htmlAction="mailto:sutter.christian95@gmail.com">
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
      <input type='submit' value="Senden!" />
    </form>
  </Segment>
)

export default class Contact extends React.Component {

  handleClick = () => {
    //var body_message = document.getElementById("form-textarea-control-opinion").value;
    var body_message = ''
    var email = 'sutter.christian95@gmail.com'
    var subject = 'Contact via portfolio-form';
    console.log(body_message);

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    window.open("mailto:sutter.christian95@gmail.com")
    //window.open("mailto:sutter.christian95@gmail.com")
  }

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
                <Grid.Column width={6}>
                  <div >
                    <h2>
                      {"Contact me @"}
                    </h2>
                    <h2>
                      {"sutter.christian95@gmail.com"}
                    </h2>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12}>
                  <div class="ui">
                    <form class="ui form">
                      {/*
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
                      */}
                      <Grid>
                        <Grid.Column>
                          <Grid.Row>
                            <button onClick={this.handleClick} class="ui inverted red button">Contact</button>
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
