import uuid from 'uuid/v4';
import { bagAddPokemon, notificationAdd, notificationRemove } from '../actions';
import reducer from '../reducer';

jest.mock('uuid/v4');

describe('Reducer', () => {
  it('handles bagAddPokemon - add a pokemon to a bag pokemon list', () => {
    const store = {
      bagPokemonList: [],
    };
    const actionPayload = { id: 12, name: 'Bulbasaur' };
    const action = bagAddPokemon(actionPayload);

    expect(reducer(store, action)).toEqual({
      bagPokemonList: [actionPayload],
    });
  });

  it('handles notificationAdd - add a notification to a notfication list', () => {
    const testMessageId = 'testMessageId';
    uuid.mockImplementation(() => testMessageId);

    const store = {
      notifications: [],
    };
    const actionPayload = { message: 'Bulbasaur was caught' };
    const action = notificationAdd(actionPayload);

    expect(reducer(store, action)).toEqual({
      notifications: [{ ...actionPayload, id: testMessageId }],
    });
  });

  it('handles notificationRemove - remove the notification from notfication list', () => {
    const notificationIdToRemove = 14;

    const store = {
      notifications: [
        {
          id: notificationIdToRemove,
          message: 'Bulbasaur was caught',
        },
        {
          id: 13,
          message: 'Charmander was caught',
        },
      ],
    };
    const action = notificationRemove(notificationIdToRemove);

    expect(reducer(store, action)).toEqual({
      notifications: [
        {
          id: 13,
          message: 'Charmander was caught',
        },
      ],
    });
  });
});
