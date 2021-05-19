import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import VillagerList from '../components/villagers/VillagerList';
import { fetchVillager } from '../services/animalCrossingApi'

const AnimalCrossing = () => {
  const [ villager, setVillager ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  // const id = window.location.href.split("/").pop();
  const params = useParams();
  useEffect(() => {
    fetchVillager(params.id)
      .then(setVillager)
      .finally(() => setLoading(false));
  },[]);
  if (loading) return <h2>Wrangling Villager...</h2>
  return (
    <div>
      <VillagerList villagers={villager} />
    </div>
  )
}


export default AnimalCrossing;