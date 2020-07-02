import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';
import ArticleListItem from './ArticleListItem/ArticleListItem';
// import classes from './Articles.module.css';

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
                'pageSize=10&' +
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
      console.log(data);
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
                key={index}
                author={article.author}
                title={article.title.split(" - ")[0]}
                source={article.source.name}
                image={article.urlToImage}
              />
            </>
        )
      }
    })

    const articleListItems = this.state.articles
                              .filter((article, index) => index > 2)
                              .map((article, index) => {
                                return(
                                  <ArticleListItem
                                    key={index}
                                    author={article.author}
                                    title={article.title.split(" - ")[0]}
                                    source={article.source.name}
                                  />
                                )
                              })

    return(
      <>
        {articleCards}
        <hr />
        <ul>
          {articleListItems}
        </ul>
      </>
    );
  }
}

export default Articles;
