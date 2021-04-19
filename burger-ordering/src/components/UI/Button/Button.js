import React from 'react';
import classes from './Button.css';

const button = props =>(
    <button className={[classes.Button , classes[props.btnType]].join(' ')} 
    disabled={props.disabled}
    //disabled properties is set in css file
    onClick={props.clicked}>
    {/* button type can be Success or Danger */}
        {props.children}
    </button>
);

export default button;