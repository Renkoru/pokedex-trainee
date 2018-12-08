import { createStore } from 'redux';

import { Player } from './models';


// ActionCreators
export const ADD_MONSTER = 'ADD_MONSTER';
export function addMonster(playerId, monster) {
    return {
        type: ADD_MONSTER,
        playerId,
        monster,
    };
}
export const SET_ALL_MONSTERS = 'SET_ALL_MONSTERS';
export function setAllMonsters(monsters) {
    return {
        type: SET_ALL_MONSTERS,
        monsters,
    };
}

export const ADD_PLAYER = 'ADD_PLAYER';
export function addPlayer(player) {
    return {
        type: ADD_PLAYER,
        player,
    };
}

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export function setCurrentPlayer(playerId) {
    return {
        type: SET_CURRENT_PLAYER,
        playerId,
    };
}

export const PLAYERS_RESET_LOCATION = 'PLAYERS_RESET_LOCATION';
export function playersResetLocation(location) {
    return {
        type: PLAYERS_RESET_LOCATION,
        location,
    };
}


// Initial State
const initialPlayers = [
    Player(),
    Player(),
    Player(),
];

const initialState = {
    monstersState: {
        monsters: []
    },
    playersState: {
        players: [...initialPlayers],
        currentPlayerId: initialPlayers[0].stringId,
        playersMonsters: {},
    },
};


// Reducers
function monsterReducer(store, action) {
    if (action.type === SET_ALL_MONSTERS) {
        const { monsters } = action;
        const { monstersState } = store;

        const newStore = {
            ...store,
            monstersState: {
                ...monstersState,
                monsters: monsters,
            }
        };

        return newStore;
    }

    return store;
};

function playersReducer(store, action) {
    if (action.type === ADD_MONSTER) {
        const { playerId, monster } = action;
        const { playersState } = store;

        const { playersMonsters } = playersState;
        const monsters = playersMonsters[playerId] || [];

        const newStore = {
            ...store,
            playersState: {
                ...playersState,
                playersMonsters: {
                    ...playersMonsters,
                    [playerId]: [...monsters, monster]
                },
            }
        };

        return newStore;
    }

    if (action.type === ADD_PLAYER) {
        const { player } = action;
        const { playersState } = store;
        const { players } = playersState;

        const newStore = {
            ...store,
            playersState: {
                ...playersState,
                players: [...players, player]
            }
        };

        return newStore;
    }

    if (action.type === SET_CURRENT_PLAYER) {
        const { playerId } = action;
        const { playersState } = store;

        const newStore = {
            ...store,
            playersState: {
                ...playersState,
                currentPlayerId: playerId,
            }
        };

        return newStore;
    }

    if (action.type === PLAYERS_RESET_LOCATION) {
        const { location } = action;
        const { playersState } = store;
        const { players } = playersState;

        const newPlayers = players.map((player) => ({ ...player, location: location }));

        const newStore = {
            ...store,
            playersState: {
                ...playersState,
                players: newPlayers,
            }
        };

        return newStore;
    }

    return store;
};

function mainReducer(store, action) {
    let newStore = store;

    newStore = monsterReducer(newStore, action);
    newStore = playersReducer(newStore, action);

    return newStore;
}


export default createStore(mainReducer, initialState);
