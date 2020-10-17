import React , { Component } from 'react';
import './App.css';

//components
import Person from './persons/person'
// import Testapi from './Test/Testapi';
// import Home from './Test/Home';

class App extends Component {

  state = {
    person : [
      {id: '1' ,name: 'max', age: 28},
      {id: '2', name: 'alex', age: 30},
      {id: '3' , name: 'alice', age: 33}
    ],
    show: false
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

  deleteHandler = (personIndex) => {
    // const persons = this.state.person.slice()
    const persons = [...this.state.person];
    persons.splice(personIndex , 1)
    this.setState({persons : persons})
  }


  nameChangedHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {

      return p.id === id;
    })

    const person = {
      ...this.state.person[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.person]
    persons[personIndex]= person;
    this.setState({person: persons})
    // this.setState({
    //   person : [
    //     {name: 'babakkkkkkkkkkkkk', age: 28},
    //     {name: event.target.value, age: 30},
    //     {name: 'mahsa', age: 29}
    //   ]
    // })
  }

  switchToggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

 

  render() {

    let persons =null;
    if (this.state.show) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
            click={() => this.deleteHandler(index)}
            name={person.name}
            age={person.age}
            key={index}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
     
      </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        {/* <Home /> */}
        <button onClick={this.switchToggle}>switch toggle</button>
       {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'helloooo'))
  }
}

export default App;
