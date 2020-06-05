import React from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux'

const person = (props) => {
  return (
    <Aux>
      <p onClick={props.changeName}> I'm {props.name} and I am {props.age} years old!</p>
      { (props.click) && <button onClick={props.click}>Delete User</button> }
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </Aux>
  )
};

export default person;
