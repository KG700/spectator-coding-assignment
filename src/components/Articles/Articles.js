import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';
import ArticleListItem from './ArticleListItem/ArticleListItem';
import classes from './Articles.module.css';

class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
        this.getArticles();
    }
  }

  getArticles = () => {
    let category = '';
    if (this.props.category !== 'topStory') {
      category = 'category=' + this.props.category + '&'
    }
    const url = 'http://newsapi.org/v2/top-headlines?' +
                'country=gb&' +
                'pageSize=10&' +
                category +
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

    let categoryHeading;
     switch(this.props.category) {
       case 'topStory':
          categoryHeading = 'Top Stories';
          break;
        case 'technology':
          categoryHeading = 'Technology'
          break;
        case 'business':
          categoryHeading = 'Business'
          break;
        case 'sports':
          categoryHeading = 'Sports'
          break;
        case 'entertainment':
          categoryHeading = 'Entertainment'
          break;

   }

    return(
      <div className={classes.Articles}>
        <h2>{categoryHeading}</h2>
        {articleCards}
        <hr />
        <ul>
          {articleListItems}
        </ul>
      </div>
    );
  }
}

export default Articles;
