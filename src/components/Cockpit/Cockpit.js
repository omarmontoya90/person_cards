import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // This is similary to componentDidMount and componentDidUpdate
    // Use to HTTP request

    //setTimeout(() => {
    //  alert('Saved data to cloud!');
    //}, 1000);
    toggleBtnRef.current.click();
  }, [props.personsLength]);
  // With array, use effect can be controlled by persons changes
  // if the array is empty, only function like componentDidMount

  return (
    <div>
      <h1>{props.title}</h1>
      <button ref={toggleBtnRef} onClick={props.togglePersons}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

//React memo, save a snapshot of the component
//and it is only processed again if any entry changes
export default React.memo(cockpit);
