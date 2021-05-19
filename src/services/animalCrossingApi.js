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

export {
  fetchVillagers,
  
}