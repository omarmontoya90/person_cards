import React, { Component } from 'react';
import classes   from'./App.css';
import Persons   from '../components/Persons/Persons';
import Cockpit   from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux       from '../hoc/Aux'

class App extends Component {
  state = {
    persons: [
      { id: "oma1", name: "Omar", age: 30},
      { id: "leo1", name: "Leonardo", age: 23},
      { id: "mon1", name: "Montoya", age: 23}
    ],
    otherSatet: "some value",
    showPersons: false,
    changeCounter: 0
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        < Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )

    }
    return (
      <Aux>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          togglePersons={this.togglePersonsHandler}
        />
        { persons }
      </Aux>

    );
  }
}

export default withClass(App, classes.App);
