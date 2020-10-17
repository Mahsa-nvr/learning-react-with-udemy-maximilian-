import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';


const Inputt = (props) => {
    let inputElement = null;
    switch(props.inputType) {
          case( 'text' ):
            inputElement =  <Input {...props} />;
          break;
          case('password') :
            inputElement = <Input {...props}/>;
            break;
            default:
                inputElement = <Input />;
    }
    return (
        <div>
           
            <Form>
              <FormGroup>
                 <Label for="">{props.label}</Label>
                 {inputElement}
              </FormGroup>
            </Form>
        </div>
    )
}
export default Inputt