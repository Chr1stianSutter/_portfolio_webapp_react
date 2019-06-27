import { observable, action } from 'mobx';
import config from "../../config/main.config";

class CommentsStore {
  @observable commentsFromServer = '';
  @observable error = '';

  @action fetchComments() {
    return fetch('http://localhost:3000/comments', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: this.comment.name,
        email: this.comment.email,
        comment: this.comment.comment,
        pid: this.comment.pid
      })
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then(json => {
          this.commentsFromServer = json.comments;
          /*
          response.json().then(result => {
            const comment = result.response[0];
            this.uuid = comment.id
            this.createdAt = comment.createdAt
            this.name = comment.name
            this.email = comment.email
            this.comment = comment.comment
            this.pid = comment.pid
            this.updatedAt = comment.updatedAt
            if(cb) cb(comment.id);
          })
          */
        });
      } else {
        this.error = "Error on fetching";
      }
    })
    .catch(
      error => {
        this.error = "Error on fetching";
        throw error;
      }
    );
  }

  @action addNewComment(newComment) {
    return fetch('http://localhost:3000/comments/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name : newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        pid: newComment.pid
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then(json => {
          /*
          response.json().then(result => {
            const comment = result.response[0];
            this.uuid = comment.id
            this.createdAt = comment.createdAt
            this.name = comment.name
            this.email = comment.email
            this.comment = comment.comment
            this.pid = comment.pid
            this.updatedAt = comment.updatedAt
            if(cb) cb(comment.id);
          })
          */
          console.log(json);
          this.fetchCars();
        });
      } else {
        this.error = "Error on fetching";
      }
    })
    .catch(
      error => {
        this.error = "Error on fetching";
        throw error;
      }
    );
  }

  @action deleteComment(commentId) {
    return fetch('http://localhost:3000/comments/delete/' + commentId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then(json => {
          console.log("comment deleted");
          this.fetchComments();
        });
      } else {
        this.error = "Error on fetching";
      }
    })
    .catch(
      error => {
        this.error = "Error on fetching";
        throw error;
      }
    );
  }
}
const store = new CommentsStore();

export default store;
