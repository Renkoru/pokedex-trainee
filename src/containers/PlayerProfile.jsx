import React from 'react';
import { Button, Heading, Flex, Box, Image } from '../components';
import { Monster } from '../models';
import MonsterList from './MonsterList.jsx';
import { withStore } from '../containers/Provider.jsx';


class PlayerProfile extends React.Component {
    constructor(props) {
        super(props);

        this.onMonsterAdd = this.onMonsterAdd.bind(this);
    }

    onMonsterAdd() {
        const monster = Monster();
        const original = this.props.allMonsters.find(({ id }) => id === monster.id);

        this.props.onMonsterAdd(this.props.player.stringId, {
            ...original,
            stringId: monster.stringId,
        });
    }

    getCurrentMonsters() {
        const { player, monsters } = this.props;

        if (!player.stringId) {
            return [];
        }

        return monsters[player.stringId] || [];
    }

    render() {
        const { player, allMonsters } = this.props;

        return (
            <Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                width="20%"
                css={{ height: '300px' }}
              >
                <Heading as="h1" fontSize={6}>
                  {player.name}
                </Heading>
                <Image
                  widht="100%"
                  css={{
                      height: '197px',
                  }}
                  src={`../static/images/trainers/${player.stringId}.gif`}
                />
                <Button
                  css={{ marginTop: '20px'}}
                  onClick={this.onMonsterAdd}>
                  Add Monster
                </Button>
              </Flex>
              <Box  width="80%">
                <MonsterList monsters={this.getCurrentMonsters()}/>
              </Box>
            </Flex>
        );
    }
}


export default withStore(PlayerProfile);
