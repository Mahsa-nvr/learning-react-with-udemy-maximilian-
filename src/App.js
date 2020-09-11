import React , { Component } from 'react';
import './App.css';

//components
import Person from './persons/person'

class App extends Component {

  state = {
    person : [
      {name: 'max', age: 28},
      {name: 'alex', age: 30},
      {name: 'alice', age: 33}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      person : [
        {name: newName, age: 28},
        {name: 'milad', age: 30},
        {name: 'mahsa', age: 29}
      ]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({
      person : [
        {name: 'babakkkkkkkkkkkkk', age: 28},
        {name: event.target.value, age: 30},
        {name: 'mahsa', age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <button onClick={() => this.switchNameHandler('maximilannnnn')}>switch toggle</button>
        <Person
           name={this.state.person[0].name}
           age={this.state.person[0].age}/>
        <Person 
           name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'max|||')}
          changed={this.nameChangedHandler}>im children of one component</Person>
        <Person
         name={this.state.person[2].name} 
         age={this.state.person[2].age}/>
      </div>
    )
    // return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'helloooo'))
  }
}

export default App;
