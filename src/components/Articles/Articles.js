import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';
import ArticleList from './ArticleList/ArticleList';

class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const url = 'http://newsapi.org/v2/top-headlines?' +
                'country=gb&' +
                'apiKey=' + process.env.REACT_APP_API_KEY;
    const request = new Request(url);
    fetch(request)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Response wasn't ok");
    })
    .then(data => {
      this.setState({ articles: data.articles });
    })
    .catch(() => console.log("Can't access " + url + "response."))
  }

  render() {

    const articleCards = this.state.articles.map((article, index) => {
      if (index < 3) {
        return(
            <>
              <ArticleCard
                author={article.author}
                title={article.title}
                image={article.urlToImage}
              />
              <hr />
            </>
        )
      }
    })

    return(
      <>
        {articleCards}
        <ArticleList />
      </>
    );
  }
}

export default Articles;
