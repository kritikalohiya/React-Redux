import React, { Component } from 'react';
import Person from './Person/Person';


//IN FUNCTION
// const persons = props => props.persons.map((p, index) => {
//   return <Person
//     key={p.id}
//     name={p.name}
//     age={p.age}
//     click={() => props.clicked(index)}
//     changed={(event) => props.changed(event, p.id)}
//   />
// });

// export default persons;

//IN CLASS
class Persons extends Component {
  shouldComponentUpdate=(nextProps,nextState)=>{
    console.log('[Persons.js] shouldComponentUpdate')
    if(nextProps.persons !== this.props.persons){
      return true;
    }
    else{ return false; }
    // return true;
  }
  componentDidMount=()=> {
    console.log('[Persons.js] componentDidMount()')
  }
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount()')
  }
  render() {
    console.log('[Persons.js] rendering...')
    return (this.props.persons.map((p, index) => {
      return (<Person
        key={p.id}
        name={p.name}
        age={p.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, p.id)}
        // isAuth={this.props.isAuthenticated}
      />
      );
    }));
  }
}

export default Persons;