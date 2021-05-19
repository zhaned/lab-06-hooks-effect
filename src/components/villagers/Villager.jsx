import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({name, quote, image}) => (
  <>
    <img
      src={image}
      alt={name}
      style={{
        height: '150px'
    }}/>
    <p>{name}</p>
    <p>{quote}</p>
  </>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;