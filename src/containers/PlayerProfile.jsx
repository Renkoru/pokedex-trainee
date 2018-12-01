import React from 'react';
import { Button } from '../components';
import { Monster } from '../models';
import MonsterList from './MonsterList.jsx';


class PlayerProfile extends React.Component {
    constructor(props) {
        super(props);

        this.onMonsterAdd = this.onMonsterAdd.bind(this);
    }

    onMonsterAdd() {
        const monster = Monster();

        this.props.onMonsterAdd(this.props.player.stringId, monster);
    }

    getMonsters() {
        const { monsters, allMonsters } = this.props;
        if (!allMonsters.length) {
            return [];
        }

        return monsters.map((monster) => {
            const original = allMonsters.find(({ id }) => id === monster.id);

            return {
                ...original,
                stringId: monster.stringId,
            };
        });
    }

    render() {
        const { player, monsters, allMonsters } = this.props;

        return (
            <div>
              <div>Player: {player.name}</div>
              <MonsterList monsters={this.getMonsters()}/>
              <Button onClick={this.onMonsterAdd}>Add Monster</Button>
            </div>
        );
    }
}

export default PlayerProfile;
