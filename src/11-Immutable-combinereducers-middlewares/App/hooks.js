import { useEffect } from 'react';

import { fetchTrainerPokemons, fetchMe, fetchAllPokemons } from 'Services/api';
import { userSet, pokemonsSet } from 'Store/actions';
import { trainerPokemonsSet } from 'Store/trainerActions';
import { useDispatch } from 'react-redux';

export function useStoreData() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const user = await fetchMe();
      const pokemons = await fetchAllPokemons();
      const trainersList = await fetchTrainerPokemons();

      dispatch(userSet(user));
      dispatch(pokemonsSet(pokemons));
      dispatch(trainerPokemonsSet(trainersList));
    }
    fetchData();
  }, [dispatch]);
}
