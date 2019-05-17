import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('sidebar component test', () => {
  it('renders the sidebar component', () => {
    const wrapper = shallow(<Sidebar  />);
    expect(wrapper).toMatchSnapshot();
  });
});
