import {
  bagAddPokemon,
  notificationAdd,
  notificationRemove,
  userSet,
  pokemonsSet,
  trainerPokemonsSet,
  trainerPokemonsAdd,
  trainerPokemonsRemove,
} from '../actions';

describe('Actions', () => {
  it('bagAddPokemon generates correct action', () => {
    const payload = {
      id: 12,
      name: 'Bulbasaur',
    };

    expect(bagAddPokemon(payload)).toEqual({
      type: 'BAG_ADD_POKEMON',
      payload,
    });
  });

  it('notificationAdd generates correct action', () => {
    const payload = {
      id: 12,
      message: 'Bulbasaur was added',
    };

    expect(notificationAdd(payload)).toEqual({
      type: 'NOTIFICATION_ADD',
      payload,
    });
  });

  it('notificationRemove generates correct action', () => {
    const payload = 12;

    expect(notificationRemove(payload)).toEqual({
      type: 'NOTIFICATION_REMOVE',
      payload,
    });
  });

  it('userSet generates correct action', () => {
    const payload = {
      id: 12,
      name: 'Ash',
    };

    expect(userSet(payload)).toEqual({
      type: 'USER_SET',
      payload,
    });
  });

  it('pokemonsSet generates correct action', () => {
    const payload = {
      id: 12,
      name: 'Bulbasaur',
    };

    expect(pokemonsSet(payload)).toEqual({
      type: 'POKEMONS_SET',
      payload,
    });
  });

  it('trainerPokemonsSet generates correct action', () => {
    const payload = [
      {
        id: 12,
        name: 'Bulbasaur',
      },
      {
        id: 13,
        name: 'Charmander',
      },
    ];

    expect(trainerPokemonsSet(payload)).toEqual({
      type: 'TRAINER_POKEMONS_SET',
      payload,
    });
  });

  it('trainerPokemonsAdd generates correct action', () => {
    const payload = {
      id: 12,
      name: 'Bulbasaur',
    };

    expect(trainerPokemonsAdd(payload)).toEqual({
      type: 'TRAINER_POKEMONS_ADD',
      payload,
    });
  });

  it('trainerPokemonsRemove generates correct action', () => {
    const payload = {
      id: 12,
      name: 'Bulbasaur',
    };

    expect(trainerPokemonsRemove(payload)).toEqual({
      type: 'TRAINER_POKEMONS_REMOVE',
      payload,
    });
  });
});
