import React from 'react';


const userInput = (props) => {

    const userstyle = {
        border: '2px solid red'
    }

    return <input style={userstyle}
                   type="text" 
                   onChange={props.changed} 
                   value={props.currentName}
                   />
}

export default userInput;