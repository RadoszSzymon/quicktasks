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
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Task Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOption}
            </select>
          </div>
          <input type="submit" value="Add quick task"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
