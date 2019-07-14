import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../../../static/logo.jpg";
import ClassNames from "classnames";
import { Grid, Segment, Card, Comments} from 'semantic-ui-react'
import {observer} from 'mobx-react'
import CommentsStore from '../../stores/CommentsStore'

import "./styles.scss"

@observer
export default class CommentsFunction extends Component {

  constructor() {
    super();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let {commentsForm} = CommentsStore
    let pid = 0

    return (
      <div class="ui">
        <form class="ui form">
          <Grid columns="equal">
            <Grid.Column>
              <Grid.Row>
              <div class="equal width fields">
                <div class="field">
                  <div class="ui fluid input"><input type="text" placeholder="First name" value={commentsForm.name} onChange={e => {commentsForm.name = e.target.value; console.log(commentsForm.name)}} /></div>
                </div>
                <div class="field">
                  <div class="ui fluid input"><input type="text" placeholder="Email adress" value={commentsForm.email} onChange={e => {commentsForm.email = e.target.value; console.log(commentsForm.email)}}/></div>
                </div>
              </div>
              <div class="field">
                <textarea type="text" placeholder="Your comment here" value={commentsForm.comment} onChange={e => {commentsForm.comment = e.target.value; console.log(commentsForm.comment)}}></textarea>
              </div>
              <button className="ui red inverted submit button" onClick={(e)=>{CommentsStore.addNewComment(pid); return false}}>
                Add Comment
              </button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </form>
      </div>
    )
  }
}
