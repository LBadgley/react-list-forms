import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const listOfColors = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} rgb={color.rgb} />
      </li>
    );
  });

  return (
    <ul>
      {listOfColors}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
