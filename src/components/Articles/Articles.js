import React, { Component } from 'react';

import ArticleCard from './ArticleCard/ArticleCard';

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
      console.log(data);
    })
    .catch(() => console.log("Can't access " + url + "response."))
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
