import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('photos test', () => {
  it('renders the photos', () =>{
    const wrapper = shallow(<Photos />);
    expect(wrapper).toMatchSnapshot();
  });
});
