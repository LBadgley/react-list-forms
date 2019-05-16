import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('photo album test', () => {
  it('photo album renders', () => {
    const photos = [
      '../../assets/calico.jpg',
      '../../assets/fatGreyTabby.jpg',
      '../../assets/nebelung.jpg'
    ];
    const wrapper = shallow(<PhotoAlbum title="Family Photos" photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
