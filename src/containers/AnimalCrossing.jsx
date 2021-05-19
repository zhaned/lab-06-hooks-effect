import React, { useState, useEffect } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { fetchVillagers } from '../services/animalCrossingApi'

const AnimalCrossing = () => {
  const [ villager, setVillager ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetchVillagers()
      .then(setVillager)
      .finally(() => setLoading(false));
  },[]);
  if (loading) return <h2>Wrangling Villagers...</h2>
  return (
    <div>
      <VillagerList villagers={villager} />
    </div>
  )
}


export default AnimalCrossing;
