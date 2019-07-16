import { observable, action } from 'mobx'

class CommentsStore {
  @observable comments = []
  @observable commentsForm = {
    name: "",
    email: "",
    comment: ""
  }
  @observable errorMsg = ''

  @action fetchComments(pid, cb) {
    console.log("fetching commnets");
    return fetch('http://localhost:3000/comments/' + pid, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if(response.status >= 200 && response.status < 300) {
        response.json().then(responseJSON => {
          this.comments = responseJSON.comments
          if(cb) cb()
        }).catch(err => {
          console.error("Error interpreting JSON from server in Comments Store\n", err);
        })
      }else{
        this.errorMsg = "Server error, see log"
        console.error("Server responded with ERROR: " + response.status)
      }
    }).catch(
      error => {
        this.errorMsg = "No internet connection detected"
        console.error("Connection timed out")
      }
    )
  }

  @action addNewComment(_pid, cb) {
    console.log("CS:", _pid);
    return fetch('http://localhost:3000/comments/' + _pid, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name : this.commentsForm.name,
        email: this.commentsForm.email,
        comment: this.commentsForm.comment,
        pid: _pid
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log("comment saved");
        console.log(this._pid);
      } else {
        this.errorMsg = "Server error, see log"
        console.error("Server responded with ERROR: " + response.status)
      }
      if(cb) cb()
    }).catch(
      error => {
        this.errorMsg = "No internet connection detected"
        console.error("Connection timed out")
      }
    )
  }

  @action deleteComment(pid, commentId) {
    return fetch('http://localhost:3000/comments/' + commentId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if(response.status >= 200 && response.status < 300) {
        console.log("Comment deleted")
        this.fetchComments(pid)
      }else{
        this.errorMsg = "Server error, see log"
        console.error("Server responded with ERROR: " + response.status)
      }
    }).catch(
      error => {
        this.errorMsg = "No internet connection detected"
        console.error("Connection timed out")
      }
    )
  }
}
const store = new CommentsStore()
export default store
