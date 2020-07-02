import React from 'react';

import classes from './ArticleListItem.module.css'

const ArticleListItem = (props) => {
  return(
    <li className={classes.ArticleListItem}>
      <h3>{props.author}</h3>
      <h2>{props.title}</h2>
      <p>source: {props.source}</p>
      <hr />
    </li>
  )
}

export default ArticleListItem;
