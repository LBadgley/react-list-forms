import React from 'react';
import PropTypes from 'prop-types';

const getHexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const getHexFromRGB = (rgb) => {
  return `#${getHexFromColor(rgb.red)}${getHexFromColor(rgb.green)}${getHexFromColor(rgb.blue)}`;
};

function Color({ name, rgb }) {
  const hex = getHexFromRGB(rgb);
  
  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '1em',
    height: '1em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex} <div style={colorStyle}></div></dd>

      <dt>HEX</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red- {rgb.red}</p>
        <p>Green- {rgb.green}</p>
        <p>Blue- {rgb.blue}</p>
      </dd>
    </dl>
  );

}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    Red: PropTypes.number.isRequired,
    Green: PropTypes.number.isRequired,
    Blue: PropTypes.number.isRequired
  })
};

export default Color;
