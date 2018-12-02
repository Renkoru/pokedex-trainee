import { createStore } from 'redux';


// ActionCreators
export const ADD_MONSTER = "ADD_MONSTER";
export function addMonster(playerId, monster) {
    return {
        type: ADD_MONSTER,
        playerId,
        monster,
    };
}


// Reducers
function monsterReducer(store, action) {
    if (action.type === ADD_MONSTER) {
        const { playerId, monster } = action;

        const { monsters } = store;
        const playerMonsters = monsters[playerId] || [];

        const newStore = {
            ...store,
            monsters: {
                ...monsters,
                [playerId]: [...playerMonsters, monster]
            }
        };

        return newStore;
    }

    return store;
};


const initialState = {
    monsters: {},
};


export default createStore(monsterReducer, initialState);
