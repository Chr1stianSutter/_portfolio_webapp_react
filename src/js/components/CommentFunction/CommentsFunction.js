import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../../../static/logo.jpg";
import ClassNames from "classnames";
import { Grid, Segment, Card, Comments} from 'semantic-ui-react'

import "./styles.scss"

export default class CommentsFunction extends Component {

  constructor() {
    super();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
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
              <form class="ui reply form">
                <div class="field">
                  <textarea></textarea>
                </div>
                <div class="ui red inverted submit button">
                   Add Comment
                </div>
              </form>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </form>
      </div>
    )
  }
}
