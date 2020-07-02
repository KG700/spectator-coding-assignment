import React from 'react';

import classes from './Logo.module.css';

const Logo = (props) => {
  return(
    <div className={classes.Logo}>
      <div className={classes.top}>THE</div>
      <div>HEADLINES</div>
    </div>
  )
}

export default Logo;
