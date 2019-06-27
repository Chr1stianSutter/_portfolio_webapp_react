import {observable, action} from "mobx"

class Store {
  @observable pageHead = {
    returnTo: null,
    title: "Loading Time Cop...",
    navigation: null
  }

  @observable projectsList = []
  @action fetchProjectsList() {
    console.log("Fetching Projects List");
    return fetch('/api/project/list', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        //"Access-Control-Allow-Origin": "[URL]"
      }
    }).then(response => {
      if(response.status <= 300 && response.status >= 200){
        response.json().then(json => {
          console.log(json)
          this.projectsList = json.response
        })
      }else{
        this.projectsList = {"error": response.status}
      }
    }).catch(err => {
      this.projectsList = {"error": 418} //Prost!
      console.error("\nStore.js - fetchProjectsList - fetch error:\n", err)
    })
  }

  @observable shouldStartTrackingOnMount = false
  @observable currentlyTracking = null

  @observable activeProject = {
    uuid: null,
    isDone: null,
    createdAt: null,
    dateArchived: null,
    color: null,
    name: null,
    description: null,
    updatedAt: null
  };
  @action createNewProject(cb){
    console.log("createnewProject called with", this.activeProject)

    fetch('URL', {method: "", headers: "", body: JSON.stringify({}) }})

    return fetch('/api/project', {
      method: "POST",
      headers: {
        "Accept": "application/jason",
        "Content-Type": "application/json"
        //Access control here
      },
      body: JSON.stringify({
        name: this.activeProject.name,
        description: this.activeProject.description
      })
    }).then(response => {
      if(response.status <= 300 && response.status >= 200){
        response.json().then(result => {
          const project = result.response[0];
          this.activeProject.uuid = project.id
          this.activeProject.isDone = project.isDone
          this.activeProject.createdAt = project.createdAt
          this.activeProject.dateArchived = project.dateArchived
          this.activeProject.color = project.color
          this.activeProject.name = project.name
          this.activeProject.description = project.description
          this.activeProject.updatedAt = project.updatedAt
          if(cb) cb(project.id);
        })
      }else{
          console.error("Unhandled HTTP status code after calling createNewProject() in ProjectPage.js React Component", response.status);
        }
    }).catch(err => {
      console.error(err)
    })
  }

  @action fetchProject(uuid){
    console.log("fetchProject called with UUId:", uuid)

    return fetch('/api/project/' + uuid, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if(response.status <= 300 && response.status >= 200){
        response.json().then(result => {
          const project = result.response[0];
          this.activeProject.uuid = project.id
          this.activeProject.isDone = project.isDone
          this.activeProject.createdAt = project.createdAt
          this.activeProject.dateArchived = project.dateArchived
          this.activeProject.color = project.color
          this.activeProject.name = project.name
          this.activeProject.description = project.description
          this.activeProject.updatedAt = project.updatedAt
          console.log("Got", this.activeProject.uuid)
        })
      }else{
          console.error("Unhandled HTTP status code after calling createNewProject() in ProjectPage.js React Component", response.status);
        }    }).catch(err => {
      console.error("fetching error:", err)
    })
  }

  @action pushUpdatedProject(uuid = this.activeProject.uuid, project = null){
    if(project != null && uuid != project.uuid){
      console.error("Implementation to push project object instead of Store.activeProject missing.")
      return false
    }

    console.log("pushing updates for active project with UUId:", uuid)
    return fetch('/api/project/' + uuid, {
      method: "PUT",
      headers: {
        "Accept": "application/jason",
        "Content-Type": "application/json"
        //Access control here
      },
      body: JSON.stringify({
        name: this.activeProject.name,
        description: this.activeProject.description
      })
    }).then(response => {
      if(response.status <= 300 && response.status >= 200){
        console.log("Project edit saved");
      }else{
        console.error("Project edits could not be saved", response.status)
      }
    }
    ).catch(err => {
      console.error("Server response on update project error", err)
    })
  }

  @action deleteProject(uuid = this.activeProject.uuid){
    return fetch('/api/project/' + uuid, {
      method: "DELETE"
    }).then(response => {
      if(response.status <= 300 && response.status >= 200){
        console.log("Project deleted.")
      }else{
        console.error("Project deletion failed", response.status)
      }
    }).catch(err => {
      console.error("Delete request connection error", err)
    })
  }

}

const store = new Store()
export default store
