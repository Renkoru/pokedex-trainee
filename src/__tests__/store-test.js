import {
    monsterReducer,
    playersReducer,
    setAllMonsters,
    addPlayer,
} from '../store';


describe('Store', () => {

    describe('monsterReducer', () => {
        it('handles "setAllMonsters" action', () => {
            const state = {};
            const monsters = [{
                id: 1,
                name: 'Max',
            }, {
                id: 2,
                name: 'Ivan',
            }];
            const action = setAllMonsters(monsters);

            expect(monsterReducer(state, action)).toEqual({
                monsters,
            });
        });
    });

    describe('playersReducer', () => {
        it('handles "addPlayer" action', () => {
            const state = {
                players: [{
                    id: 2,
                    name: 'Ivan',
                }]
            };
            const player = {
                id: 1,
                name: 'Max',
            };
            const action = addPlayer(player);

            expect(playersReducer(state, action)).toEqual({
                players: [{
                    id: 2,
                    name: 'Ivan',
                }, {
                    id: 1,
                    name: 'Max',
                }],
            });
        });
    });

});

