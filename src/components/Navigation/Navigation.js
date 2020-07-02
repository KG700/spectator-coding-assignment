import React from 'react';

import classes from './Navigation.module.css';
import Logo from '../Logo/Logo';

const Navigation = (props) => {
  return(
    <header className={classes.Navigation}>
      <Logo />
      <br />
      <nav>
        <ul>
          <li onClick={props.click} value='topStory'>Top Stories /</li>
          <li onClick={props.click} value='business'>Business /</li>
          <li onClick={props.click} value='sports'>Sports /</li>
          <li onClick={props.click} value='entertainment'>Entertainment /</li>
          <li onClick={props.click} value='technology'>Technology</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;
