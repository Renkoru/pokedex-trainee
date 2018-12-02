export const ADD_MONSTER = "ADD_MONSTER";


const initialState = {
    monsters: {},
};


export default class Store {
    constructor(onUpdate) {
        this.onUpdate = onUpdate;
        this.store = {...initialState};

        this.dispatch = this.dispatch.bind(this);
    }

    onMonsterAdd(playerId, monster) {
        const { monsters } = this.store;
        const playerMonsters = monsters[playerId] || [];

        const newStore = {
            ...this.store,
            monsters: {
                ...monsters,
                [playerId]: [...playerMonsters, monster]
            }
        };

        return newStore;
    }

    dispatch(action) {
        console.log('\n>>>>>> Got Action');
        console.log(action);
        console.log('<<<<<< end block Got Action');

        let newStore;

        if (action.type === ADD_MONSTER) {
            newStore = this.onMonsterAdd(action.playerId, action.monster);
        }

        this.store = newStore;
        this.onUpdate(this.store);
    }
};
