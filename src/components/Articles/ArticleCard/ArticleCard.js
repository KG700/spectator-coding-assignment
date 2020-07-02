import React from 'react';

const ArticleCard = (props) => {
  return (
    <>
      <h3>{props.author}</h3>
      <h2>{props.title}</h2>
      <img src={props.image} />
    </>
  )
}

export default ArticleCard;
