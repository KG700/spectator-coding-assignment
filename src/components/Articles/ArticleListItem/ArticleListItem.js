import React from 'react';

const ArticleListItem = (props) => {
  return(
    <li>
      <h3>{props.author}</h3>
      <h2>{props.title}</h2>
      <p>source: {props.source}</p>
    </li>
  )
}

export default ArticleListItem;
