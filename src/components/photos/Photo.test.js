import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('photo component', () => {
  it('renders a Photo', () => {
    const wrapper = shallow(<Photo photo="/path/to/photo" />);
    expect(wrapper).toMatchSnapshot();
  });
});
