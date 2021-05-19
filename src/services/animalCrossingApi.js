const fetchVillagers = async () => {
  const response = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await response.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    quote: villager.quote,
    image: villager.image,
  }));
};

const fetchVillager = async (id) => {
  const response = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const results = await response.json();
  const array =[]
  array.push(results);

  return array.map((villager) => ({
    id: villager._id,
    name: villager.name,
    quote: villager.quote,
    image: villager.image,
  }));
};

export {
  fetchVillagers,
  fetchVillager
}