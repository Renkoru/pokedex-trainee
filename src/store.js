export const ADD_MONSTER = "ADD_MONSTER";
// ActionCreators
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

export default class Store {
    constructor(onUpdate) {
        this.onUpdate = onUpdate;
        this.store = {...initialState};

        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        console.log('\n>>>>>> Got Action');
        console.log(action);
        console.log('<<<<<< end block Got Action');

        let newStore = this.store;
        newStore = monsterReducer(newStore, action);

        this.store = newStore;
        this.onUpdate(this.store);
    }
};
