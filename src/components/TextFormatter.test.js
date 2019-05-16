import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('formatted text test', () => {
  it('renders the formatted text', () => {
    const wrapper = shallow(<TextFormatter  />);
    expect(wrapper).toMatchSnapshot();
  });
});
