import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
 return (
     <div class="UserOutput">
         <p>username: {props.userName}</p>
         <p>i hope ill be overwritten!!!</p>
     </div>
 )
}

export default userOutput;