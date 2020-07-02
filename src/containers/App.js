import React, { Component } from 'react';

import Logo from '../components/Logo/Logo';
import Articles from '../components/Articles/Articles';
import Navigation from '../components/Navigation/Navigation';
import classes from './App.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'topStory'
    }
  }

  changeCategoryHandler = (event) => {
    let category = event.target.getAttribute('value');
    this.setState({ category: category });
  }

  render() {

    return (
      <div className={classes.App}>
        <div>
          <Navigation click={this.changeCategoryHandler}/>
        </div>
        <div className={classes.Articles}>
          <Articles category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default App;
