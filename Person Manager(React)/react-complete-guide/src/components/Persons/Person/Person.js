import React, { Component } from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';

import Aux from '/home/ttn/react-complete-guide/src/Hoc/Aux.js';
import withClass from '/home/ttn/react-complete-guide/src/Hoc/WithClass.js';

import PropTypes from 'prop-types';

import AuthContext from '/home/ttn/react-complete-guide/src/context/auth-context.js';


//STYLING USING STYLED COMPONENT.
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     padding: 16px;
//     border: 1px solid #eee ;
//     box-shadow: 0 2px 3px #ccc;
//     text-align: center;

//     @media (min-width: 500px) {
//     width: 450px;
//     background-color:lightpink;
//     }
// `;
// const person =(props)=>{
//     // RETURN USING STYLED COMPONENT.
//     return (
//     <StyledDiv>
//     <p onClick={props.click}>My name is {props.name}, My age is: {props.age}</p>
//     <p>{props.children}</p>
//     <input type='text' onChange={props.changed} value={props.name} />
//     </StyledDiv>
//     );
// }


//STYLING USING RADIUM.
// const person =(props)=>{
//     const s={
//         '@media (min-width: 500px)' : { 
//             width:'450px',
//             backgroundColor:'lightpink'
//         }
//     };
//     return (
//     <div className="Person" style={s}>
//     <p onClick={props.click}>My name is {props.name}, My age is: {props.age}</p>
//     <p>{props.children}</p>
//     <input type='text' onChange={props.changed} value={props.name} />
//     </div>
//     );
// }


//STYLING USING CSS MODULE
// const person =(props)=>{
//     return (
//         <div className={classes.Person}>
//         <p onClick={props.click}>My name is {props.name}, My age is: {props.age}</p>
//         <p>{props.children}</p>
//         <input type='text' onChange={props.changed} value={props.name} />
//         </div>
//         );
// };


// export default Radium(person);
// export default person;


class Person extends Component {
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElement.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {/* USING <AuthContext.Consumer> HERE,WILL PRINT 'AUTHENTICATED' on EVERY Person DATA  */}
                {/* <AuthContext.Consumer>
                    {
                        (context) => 
                        context.authenticated ? <p>AUTHENTICATED!!</p> : <p>PLEASE LOG IN</p> 
                    }
                </AuthContext.Consumer> */}
                {/* OR */}
                {
                    this.context.authenticated ? <p>AUTHENTICATED!!</p> : <p>PLEASE LOG IN</p>
                }

                {/* <div className={classes.Person}> */}

                <p onClick={this.props.click}>My name is {this.props.name}, My age is: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type='text'
                    ref={(inputEL) => { this.inputElement = inputEL }}
                    onChange={this.props.changed}
                    value={this.props.name} />

                {/* </div> */}
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


// export default Person;
export default withClass(Person, classes.Person);
