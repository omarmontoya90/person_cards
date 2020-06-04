import React, { useEffect } from 'react';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // This is similary to componentDidMount and componentDidUpdate
    // Use to HTTP request

    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
  }, [props.persons]);
  // With array, use effect can be controlled by persons changes
  // if the array is empty, only function like componentDidMount

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.togglePersons}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
