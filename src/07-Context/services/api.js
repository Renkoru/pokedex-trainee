import axios from 'axios';

export function getPokemons() {
  return axios.get('/api/v1/pokemons').then(result => result.data);
}
