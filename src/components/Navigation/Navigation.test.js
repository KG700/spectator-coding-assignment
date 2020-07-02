import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import Logo from '../Logo/Logo';

configure({adapter: new Adapter()});

describe('Navigation', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  })

  it('contains 1 Articles component', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  })

})
