import React from 'react'
import ClassNames from "classnames";
import {Grid, Segment, Card, Comment} from 'semantic-ui-react'
import image from '../../../../static/avatar1.png';

import "./styles.scss"

export default class CommentComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.commentData);
    return (
      <Comment>
       <Comment.Avatar src={image} />
       <Comment.Content>
         <Comment.Author>{this.props.commentData.name || "Anonymous Comment"}</Comment.Author>
         <Comment.Metadata>
           <div>{this.props.commentData.createdAt || "Missing Date"}</div>
         </Comment.Metadata>
         <Comment.Text>{this.props.commentData.comment || "Empty Comment"}</Comment.Text>
       </Comment.Content>
     </Comment>
    )

  }
}

/*
{
<Comment.Actions>
  <Comment.Action>Reply</Comment.Action>
</Comment.Actions>
}
*/
