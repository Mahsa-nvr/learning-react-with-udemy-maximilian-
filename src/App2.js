import React from 'react';

//components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App2 extends React.Component {

    state = {
        username : "superMax"
    }

    usernameChangedHandler = (event) => {
      this.setState({
          username : event.target.value
      })
    }
    render() {
        return (
            <div  className="App">
                <ol>
                    <li>cerate two new components: userInput and userout</li>
                    <li>userInput should hold an input element, useroutput has two paragraphs</li>
                    <li>Output multiple UserOutput components in the App2 component ( any paragraph texts of your choice)</li>
                    <li>Pass a username (of your choice) to UserOutput  via props and display it there</li>
                    <li>Add state to the App2 component ( => the username) and pass the username to the UserOutput component</li>
                    <li>Add a method to manipulate the state ( => an event-handler method)</li>
                    <li>Pass the event-handler method refrence to the Username passed to UserOutput</li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
                </ol>
               <UserInput 
               changed={this.usernameChangedHandler}
               currentName={this.state.username}/>
               <UserOutput  userName={this.state.username}/>
               <UserOutput  userName={this.state.username}/>
               <UserOutput  userName="max"/>

            </div>
        )
    }
}

export default App2;
