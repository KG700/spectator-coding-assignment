import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArticleListItem from './ArticleListItem';

configure({adapter: new Adapter()});

describe('ArticleList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticleListItem />);
  })

  it('renders the html for the article title', () => {
    wrapper.setProps({ title: "Exciting News Story" });
    expect(wrapper.html()).toContain('<h2>Exciting News Story</h2>')
  })

  it('renders the html for the article title', () => {
    wrapper.setProps({ author: "Joanne Blogger" });
    expect(wrapper.html()).toContain('<h3>Joanne Blogger</h3>')
  })

  it('renders the html for the article title', () => {
    wrapper.setProps({ source: "Telegraph" });
    expect(wrapper.html()).toContain('<p>source: Telegraph</p>')
  })

})
