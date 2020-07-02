import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArticleCard from './ArticleCard';

configure({adapter: new Adapter()});

describe('ArticleCard', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticleCard />);
  })

  it('renders the html for the article title', () => {
    wrapper.setProps({ title: "Exciting News Story" });
    expect(wrapper.html()).toEqual('<h2>Exciting News Story</h2>')
  })
})
