import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Articles from './Articles';
import ArticleCard from './ArticleCard/ArticleCard';
import ArticleList from './ArticleList/ArticleList';

configure({adapter: new Adapter()});

describe('Articles', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Articles />);
  })

  // it('renders 3 ArticleCard components', () => {
  //   expect(wrapper.find(ArticleCard)).toHaveLength(3);
  // })

  it('renders 1 ArticleList components', () => {
    expect(wrapper.find(ArticleList)).toHaveLength(1);
  })

})
