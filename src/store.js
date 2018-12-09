import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createAction, createActions, handleActions } from 'redux-actions';

import { Player } from './models';


// ActionCreators
export const {
    addMonster,
    setAllMonsters,
    addPlayer,
    setCurrentPlayer,
    playersResetLocation,
    setErrorMessage,
} = createActions({
    ADD_MONSTER: (playerId, monster) => ({
        playerId,
        monster,
    }),
    SET_ALL_MONSTERS: (monsters) => ({ monsters }),
    ADD_PLAYER: (player) => ({ player }),
    SET_CURRENT_PLAYER: (playerId) => ({ playerId }),
    PLAYERS_RESET_LOCATION: (location) => ({ location }),
    SET_ERROR_MESSAGE: (message) => ({ message }),
});

export const fetchResource = createAction(
    'FETCH_RESOURCE',
    (url, successAction) => ({ url, successAction: successAction.toString() })
);

export const fetchMonsters = () => (dispatch) => {
    return fetch('/api/v1/monsters')
        .then(res => res.json())
        .then(res => dispatch(setAllMonsters(res)));
};

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
export const monsterReducer = handleActions({
    [setAllMonsters]: (state, action) => {
        return {
            ...state,
            monsters: action.payload.monsters,
        };
    },
    [setErrorMessage]: (state, action) => {
        return {
            ...state,
            errorMessage: action.payload.message,
        };
    }
}, initialState);

export const playersReducer = handleActions({
    [addMonster]: (state, action) => {
        const { playerId, monster } = action.payload;
        const { playersMonsters } = state;

        const monsters = playersMonsters[playerId] || [];

        return {
            ...state,
            playersMonsters: {
                ...playersMonsters,
                [playerId]: [...monsters, monster]
            },
        };
    },
    [addPlayer]: (state, action) => {
        const { player } = action.payload;
        const { players } = state;

        return {
            ...state,
            players: [...players, player]
        };

    },
    [setCurrentPlayer]: (state, action) => {
        const { playerId } = action.payload;

        return {
            ...state,
            currentPlayerId: playerId,
        };
    },
    [playersResetLocation]: (state, action) => {
        const { location } = action.payload;
        const { players } = state;

        const newPlayers = players.map((player) => ({ ...player, location: location }));

        return {
            ...state,
            players: newPlayers,
        };
    },
}, initialState);


const mainReducer = combineReducers({
    monstersState: monsterReducer,
    playersState: playersReducer,
});


const logger = store => next => action => {
    console.log('Dispatching:', action);
    return next(action);
};


export default createStore(mainReducer, initialState, applyMiddleware(
    logger,
    thunk,
));
