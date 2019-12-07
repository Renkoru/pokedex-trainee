import { getTrainerPokemons } from '../selectors';

describe('Selectors', () => {
  it('getTrainerPokemons returns correct list', () => {
    const state = {
      pokemonList: [
        {
          pid: 12,
          name: 'Bulbasaur',
          imageUrl: '/pictures/12.jpg',
        },
        {
          pid: 13,
          name: 'Charmander',
          imageUrl: '/pictures/13.jpg',
        },
      ],
      trainerPokemonList: [
        {
          id: 134,
          pid: 13,
          name: 'Charmander',
        },
      ],
    };

    expect(getTrainerPokemons(state)).toEqual([
      {
        id: 134,
        pid: 13,
        name: 'Charmander',
        imageUrl: '/pictures/13.jpg',
      },
    ]);
  });
});
