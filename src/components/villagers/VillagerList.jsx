import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';


const VillagerList = ({ villagers }) => (
  //aria-labels attaches a label to anonymous HTML elements
  <ul aria-label='villagers'>
    {
      villagers.map((villager) => (
        <li key={villager.id}>
          <Villager 
            name={villager.name}
            quote={villager.quote}
            image={villager.image}
            id={villager.id}
          />
        </li>
      ))
    }
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;