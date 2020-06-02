import React from 'react';

const cockpit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.togglePersons}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
