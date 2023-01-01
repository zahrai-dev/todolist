import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }
  
  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      items     : [...this.state.items, this.state.todoItem],
      todoItem  : ''
      // items: this.state.items.concat([this.state.todoItem])
    })
  }
  handleChange = (event) =>{
    this.setState({
      todoItem: event.target.value
    })
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>ADD</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
