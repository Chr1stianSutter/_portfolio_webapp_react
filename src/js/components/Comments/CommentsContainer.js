import React from "react"
import {observer} from "mobx-react"
import { Grid, Segment, Card, Comment, Checkbox} from 'semantic-ui-react'

import CommentsStore from "../../stores/CommentsStore"
import CommentsForm from "./CommentForm/CommentsForm"
import CommentComponent from "./Comment/CommentComponent"

import "./style.scss"

@observer
export default class CommentsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      showComments: false
    }
  }

  updateComments(){
    this.render()
  }
  reloadComments(){
    CommentsStore.fetchComments(this.props.pid, this.updateComments.bind(this))
  }
  componentDidMount(){
    this.reloadComments()
  }

  toggleComments(e, { checked }){
    this.setState({ showComments: checked })
    window.setTimeout(function(){
      window.scrollTo(0, (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) + 200)
    }, 1)
  }

  render(){
    var {comments} = CommentsStore
    return (
      <div className="__commentsContainer">
        <div className="checkBoxContainer">
          <Checkbox toggle label='Show comments' onChange={this.toggleComments.bind(this)} />
        </div>

        <Grid columns="equal">
        <Grid.Column width ={5}></Grid.Column>
          <Grid.Column width ={6}>
            <CommentsForm pid={this.props.pid} renderTrigger={this.reloadComments.bind(this)} />
            <div class="ui divider"></div>
            <Comment.Group  size='large' collapsed={!this.state.showComments} >
              {comments.map((comment, i) => {
                console.log(comment);
                return <CommentComponent key={comment.id} commentData={comment} />
              })}
            </Comment.Group>
            </Grid.Column>
          <Grid.Column width ={5}></Grid.Column>
        </Grid>
      </div>
    )
  }
}
