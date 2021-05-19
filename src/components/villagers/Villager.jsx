import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({name, quote, image, id}) => (
  <div>
    <Link to={`/${id}`}>
      <img
        src={image}
        alt={name}
        style={{
          height: '150px'
      }}/>
      <p>{name}</p>
      <p>{quote}</p>
    </Link>
  </div>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;