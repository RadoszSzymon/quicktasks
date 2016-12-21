import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Home', 'Work', 'Personal', 'School']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Please set the title");
    }else{
      this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOption = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h1>QuickTasks</h1>
        <p>Add things to acomplish, refresh site and forget about it.</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="titleDiv">
            <label className="titleInput">Task Title</label><br />
            <input className="title" type="text" ref="title" />
          </div>
          <div className="categoryDiv">
            <label className="categoryInput">Category</label><br />
            <select className="category" ref="category">
              {categoryOption}
            </select>
          </div>
          <input type="submit" className="button" value="Add quick task"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
