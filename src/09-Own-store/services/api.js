import axios from 'axios';

export function getPokemons() {
  return axios.get('/api/v1/pokemons').then(result => result.data);
}

export function getTrainerPokemons(trainerId) {
  return axios
    .get(`/api/v1/trainers/${trainerId}/pokemons`)
    .then(result => result.data);
}

export function addTrainerPokemon(trainerId, pokemonId) {
  return axios
    .post(`/api/v1/trainers/${trainerId}/pokemons`, {
      pid: pokemonId,
    })
    .then(result => result.data);
}

export function removeTrainerPokemon(trainerId, pokemonId) {
  return axios
    .delete(`/api/v1/trainers/${trainerId}/pokemons/${pokemonId}`)
    .then(result => result.data);
}
