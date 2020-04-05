import axios from 'axios';

const meUserId = 1;

export async function fetchAllPokemons() {
  const { data } = await axios.get('/api/v1/pokemons');

  return data;
}

export async function fetchMe() {
  const { data } = await axios.get(`/api/v1/trainers/${meUserId}`);

  return data;
}

export async function fetchTrainerPokemons() {
  const { data } = await axios.get(`/api/v1/trainers/${meUserId}/pokemons`);

  return data;
}

export async function addTrainerPokemon(trainerId, pokemonId) {
  const { data } = await axios.post(`/api/v1/trainers/${meUserId}/pokemons`, { pid: pokemonId });

  return data;
}

export async function removeTrainerPokemon(trainerId, pokemonId) {
  const { data } = await axios.delete(`/api/v1/trainers/${meUserId}/pokemons/${pokemonId}`);

  return data;
}

export async function updateMe(data) {
  return axios.put(`/api/v1/trainers/${meUserId}`, data);
}
