import React from 'react';
import propTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photoList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });


  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: propTypes.array.isRequired
};

export default Photos;
