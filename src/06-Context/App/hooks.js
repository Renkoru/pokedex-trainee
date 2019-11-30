import { useEffect } from 'react';

import { fetchTrainerPokemons, fetchMe, fetchAllPokemons } from 'Services/api';
import { useStore } from '../store';

export function useStoreData() {
  const { setUser, setPokemons, setTrainerPokemonList } = useStore();

  useEffect(() => {
    async function fetchData() {
      const user = await fetchMe();
      const pokemons = await fetchAllPokemons();
      const trainersList = await fetchTrainerPokemons();

      setUser(user);
      setPokemons(pokemons);
      setTrainerPokemonList(trainersList);
    }
    fetchData();
  }, [setUser, setPokemons, setTrainerPokemonList]);
}
