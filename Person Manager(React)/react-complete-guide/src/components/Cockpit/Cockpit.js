import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleRef = useRef();

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });

  const assignedClasses = [];
  let btnClass = ''; //btnClass is a pointer at this class
  if (props.showPersons) {
    btnClass = [classes.Red];
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes=['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes=['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>I LOVE REACT</p>
      {/* <button className={btnClass.join(' ')} onClick={this.toggleHandler}>TOGGLE</button> */}
      <button ref={toggleRef} className={btnClass} onClick={props.clicked}>TOGGLE</button>

      <AuthContext.Consumer>
        {
          context => <button onClick={context.login}>
            LOG IN
        </button>
        }
      </AuthContext.Consumer>

      {/* USING <AuthContext.Consumer> HERE,WILL PRINT 'AUTHENTICATED' on ABOVE THE Person DATA ONLY ONCE */}
      <AuthContext.Consumer>
        {
          (context) =>
            context.authenticated ? <p>AUTHENTICATED!!</p> : <p>PLEASE LOG IN</p>
        }
      </AuthContext.Consumer>
    </div>
  );
};
export default React.memo(Cockpit);