import React, { Component } from "react";
// import React, {useState } from "react";
// import Radium,{StyleRoot} from 'radium';
// import styled from 'styled-components';
import classes from "./App.css";
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '/home/ttn/react-complete-guide/src/context/auth-context.js';
import withClass from '../Hoc/WithClass';
import Aux from '../Hoc/Aux';


// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color:white;
//     border: 1px solid green;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${props => props.alt ? 'brown' : 'lightgreen'};
//       color:black;
//     }
//     `;

//CLASS COMPONENT
class App extends Component {
  state = {
    persons: [
      { id: 'a', name: "MAX", age: 12 },
      { id: 'b', name: "SANNY", age: 10 },
      { id: 'c', name: "TANNY", age: 18 }
    ],
    otherState: "RANDOM TEXT",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "MANNY", age: 10 },
        { name: "TANNY", age: 18 }
      ]
    })
  }

  changeHandler = (event, id) => {
    //frst we find the index using findIndex() 
    const personIndex = this.state.persons.findIndex(p => {
      //on 'id' id we are chnging name & we match it actual id ,It'll true or false
      return p.id === id;
    });
    //nw store the array(i.e. id,name,age) of tht index in pi,so basically 'pi' is storing an array.
    const pi = { ...this.state.persons[personIndex] };
    // console.log(pi)
    pi.name = event.target.value;
    const per = [...this.state.persons];
    // console.log(per)
    per[personIndex] = pi;

    // this.setState({ persons: per });
    this.setState((prevState,props)=>{
      return { 
        persons: per,
        changeCounter:prevState.changeCounter+1
      };
      });


    // this.setState({
    //   persons: [
    //     { name: "MAX", age: 23 },
    //     { name: event.target.value, age: 10 },
    //     { name: "TANNY", age: 18 }
    //   ]
    // })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deleteHandler = (personIndex) => {
    let per = [...this.state.persons];
    per.splice(personIndex, 1);
    this.setState({ persons: per });
  }

  loginHandler=()=>{
    console.log('LOGIN clicked')
    this.setState({authenticated:true});
  }

  render() {
    // let btnClass='';  //btnClass is a pointer at this class
    // const s={
    //   backgroundColor: 'green',
    //   color:'white',
    //   border: '1px solid green',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover' : {
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // };

    console.log('[App.js] render');
    let person = null;
    if (this.state.showPersons) {
      //if it is true den we add jsx code in (..) to person variable.
      person = (
        <Persons
        persons={this.state.persons}
        clicked={this.deleteHandler}
        changed={this.changeHandler}
        isAuthenticated={this.state.authenticated} 
        />
      )
      
      // person = (
      //   <div>

      //     {
      //       this.state.persons.map((p,index)=>{
      //         return <Person 
      //         key={p.id}
      //         name={p.name} 
      //         age={p.age}
      //         click={()=>this.deleteHandler(index)}
      //         changed={(event)=>this.changeHandler(event,p.id)}
      //         />
      //       })
      //     }

      // <Person name={this.state.persons[0].name} 
      //     age={this.state.persons[0].age} />
      //     <Person name={this.state.persons[1].name}
      //     age={this.state.persons[1].age}
      //     click={this.switchHandler.bind(this, "KRITIKAAALOHIYA")}
      //     changed={this.changeHandler}>
      //       Some text
      //     </Person>
      //     <Person name={this.state.persons[2].name}
      //     age={this.state.persons[2].age} />

      //   </div>
      // );

      // s.backgroundColor='red';
      // s[':hover']={
      //   backgroundColor: 'brown',
      // };

      // btnClass.push(classes.Red);

      // btnClass=[classes.Red];
    }

    //HOW TO PUSH CLASS DYNAMICALLY
    // const assignedClasses=[];
    // if(this.state.persons.length<=2){
    //   assignedClasses.push(classes.red); //classes=['red']
    // }
    // if(this.state.persons.length<=1){
    //   assignedClasses.push(classes.bold); //classes=['red','bold']
    // }

    return (
      //use <styleRoot> if u r using Radium.
      // <StyleRoot>

      <Aux>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.toggleHandler}>
          SWITCH
        </StyledButton> */}

        <button onClick={() => {
          this.setState({ showCockpit: false })
        }}>
          REMOVE COCKPIT
        </button>

        <AuthContext.Provider value={{
          authenticated:this.state.authenticated,
          login:this.loginHandler
        }}>
        {
            this.state.showCockpit ? (
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.toggleHandler}
                // login={this.loginHandler}
              />
            ) : null
        }
        {person}
        </AuthContext.Provider>
        </Aux>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default withClass(App, classes.App);

//FUNCTIONAL COMPONENT

// const App = props =>{
//   //nw we do array destructing here 
//   const [personsState,setPersonsState]= useState({
//     persons:[
//       {name:"MAX",age:12},
//       {name:"MANNY",age:10},
//       {name:"TANNY",age:18}
//     ]
//   });

//   const [otherState,setOtherState]=useState('RANDOM TEXT');
//   console.log(personsState,otherState);

//   const switchHandler=()=>{
//     setPersonsState({
//       persons:[
//         {name:"KRITIKA" , age:23},
//         {name:"MANNY",age:10},
//         {name:"TANNY",age:18}
//     ]
//     // otherState:personsState.otherState
//     })
//   };

//   return(
//     <div className="App">
//         <h1>Hii</h1>
//         <button onClick={switchHandler}>SWITCH</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Some text</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }
// export default App;