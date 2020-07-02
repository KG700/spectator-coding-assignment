import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';

class Articles extends Component {

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
