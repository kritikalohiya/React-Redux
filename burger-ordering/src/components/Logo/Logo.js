import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        {/* <img src="../../assets/images/burger-logo.png"/> */}
        {/* Abv code Will not wrk in react */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;