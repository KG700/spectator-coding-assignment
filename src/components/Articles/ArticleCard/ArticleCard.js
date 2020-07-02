import React from 'react';

import classes from './ArticleCard.module.css';

const ArticleCard = (props) => {
  return (
    <div className={classes.ArticleCard}>
      <div className={classes.articleContainer}>
        <h3>{props.author}</h3>
        <h2>{props.title}</h2>
        <p>source: {props.source}</p>
        <div className={classes.imgContainer}>
          <img src={props.image} />
        </div>
      </div>
    </div>
  )
}

export default ArticleCard;
