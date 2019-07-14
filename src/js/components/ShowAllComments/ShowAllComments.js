import React, { Component } from 'react'
import {observer} from "mobx-react"

import "./style.scss"
import commentsStore from "../stores/commentsStore"

@observer
export default class ShowAllComments extends Component {

  constructor(props) {
    super(props)
    this.projectId = (this.props.pid) ? this.props.pid : false;
    this.state = {
      commentsDidLoad: false
    }
  }
// <ShowAllComments pid={1} />
  commentsDidLoad(){
    this.setState({commentsDidLoad: true})
  }
  componentDidMount(){
    (this.projectId) ? commentsStore.fetchComments(this.projectId, commentsDidLoad) : console.error("No project Id");
  }
  // componentWillUnmount(){
  //   commentsStore.comments = []
  // }

  render() {

    if(!this.state.commentsDidLoad) {
      return (
        <div class="ui comments" id="__comments">
          <p>{(this.projectId) ? "Comments loading..." : "Projects Id Missing, cannot load comments."}</p>
        </div>
      )
    }else{
      return(
        <div class="ui comments" id="__comments">
            {JS MAP commentsStore.comment

/*
<div class="comment">
  <a class="avatar">
    <img src="/images/avatar/small/joe.jpg"/>
  </a>
  <div class="content">
    <a class="author">Joe Henderson</a>
    <div class="metadata">
      <div class="date">1 day ago</div>
    </div>
    <div class="text">
      <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
      <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
    </div>
    <div class="actions">
      <a class="reply">Reply</a>
    </div>
  </div>
</div>
*/

            }
        </div>
      )
    }
  }
}
