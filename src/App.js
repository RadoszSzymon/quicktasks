import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App container">
        <div className="row add">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
        </div>
        <div className="row projects">
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
