import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';

class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles = [];
    }
  }

  

  render() {

    return(
      <>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </>
    )

  }

}

export default Articles;
