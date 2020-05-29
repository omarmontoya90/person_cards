import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.changeName}> I'm {props.name} and I am {props.age} years old!</p>
      { (props.click) && <button onClick={props.click}>Delete User</button> }
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
