import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import classes              from './Person.css';
import Aux                  from '../../../hoc/Aux'
import withClass            from '../../../hoc/withClass'

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.changeName}> I'm {this.props.name} and I am {this.props.age} years old!</p>
        { (this.props.click) && <button onClick={this.props.click}>Delete User</button> }
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
