import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('photos test', () => {
  it('renders the photos', () => {
    const photos = [
      '/img1',
      '/img2',
      '/img3'
    ];
    const wrapper = shallow(<Photos photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
