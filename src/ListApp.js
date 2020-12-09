import React from 'react';
import Validation from './Validation/Validation';

class ListApp extends React.Component {

    state = {
        userInput: ''
    }

    inputChangedHandler = ( event ) => {
        this.setState({
            userInput: event.target.value
        })
    }
    render(){
        return (
            <div>
                <hr/>
                <input
                  type="text" 
                  onChange={this.inputChangedHandler}
                  value={this.state.userInput}/>
                  <div>{this.state.userInput}</div>
                  <Validation  inputLength={this.state.userInput.length}/>
            </div>
        )
    }
}

export default ListApp;