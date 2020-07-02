import React from 'react';

import classes from './Navigation.module.css';
import Logo from '../Logo/Logo';

const Navigation = (props) => {
  return(
    <header className={classes.Navigation}>
      <Logo />
      <nav>
        <ul>
          <li onClick={props.click} value='topStory'>Top Stories /</li>
          <li onClick={props.click} value='general'>General /</li>
          <li onClick={props.click} value='business'>Business /</li>
          <li onClick={props.click} value='sports'>Sports /</li>
          <li onClick={props.click} value='entertainment'>Entertainment</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;
