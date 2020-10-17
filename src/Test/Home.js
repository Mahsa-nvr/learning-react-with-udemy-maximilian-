import React from 'react';
import Header from './Header';

class Home extends React.Component{
    constructor(props){
       super(props);
       this.state={
           firstt: 'hello'
       }
    }

    onChangeLinkName = (newName) => {
        this.setState({
            firstt : newName  
        })
    }
    render() {
        return (
            <React.Fragment>
            <div>
                {this.state.firstt}
            </div>
            <Header
             changeLink={this.onChangeLinkName.bind(this)} 
             initialLinkName={this.state.firstt}
             
             />

            </React.Fragment>
        )
    }
}

export default Home;