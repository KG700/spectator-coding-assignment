import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Articles from '../components/Articles/Articles';
import Logo from '../components/Logo/Logo';

configure({adapter: new Adapter()});

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('contains 1 Articles component', () => {
    expect(wrapper.find(Articles)).toHaveLength(1);
  })

  it('contains 1 Logos component', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  })
})
