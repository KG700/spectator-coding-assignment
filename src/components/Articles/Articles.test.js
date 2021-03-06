import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Articles from './Articles';
import ArticleCard from './ArticleCard/ArticleCard';
import ArticleListItem from './ArticleListItem/ArticleListItem';

configure({adapter: new Adapter()});

describe('Articles', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Articles />);
  })

  it('renders the html for the category', () => {
    wrapper.setProps({ category: "topStory" });
    expect(wrapper.html()).toContain('<h2>Top Stories</h2>')
  })

})
