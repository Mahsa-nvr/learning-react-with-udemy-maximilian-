import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props)
        this.state={
            second: props.initialLinkName
        }
    }

    HandleChange = (event) => {
        this.setState({
            second:event.target.value
        })

    }

    onChangeLink  ()  {
       this.props.changeLink(this.state.second)
    }


  render() {
      return (
          <div>
              <div>
                  {this.state.second}
              </div>
              <input type="text"  value={this.state.second} onChange={this.HandleChange}/>
              <button onClick={this.onChangeLink.bind(this)}>click</button>
          </div>
      )
  }
}

export default Header;