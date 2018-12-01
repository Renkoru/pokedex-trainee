import React from 'react';
import capitalize from 'lodash/capitalize';

import { Box, Card, Flex, Image } from '../components';


function Monster({stringId, name}) {
    return (
        <Card
          bg='#fff'
          border='1px solid #ccc'
          boxShadow='2px 2px 3px #eee'
          width={100}
          mx="10px"
          my="5px"
          p={10}
          css={{
              textAlign: 'center',
          }}
        >
          <div>{capitalize(name)}</div>

          <Image
            css={{
                height: '70px',
            }}
            src={`../static/images/pokemons/${stringId}.gif`}
          />
        </Card>
    );
}


class MonsterList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { monsters } = this.props;

        return (
            <Flex my={12} flexWrap="wrap">
              {monsters.map(monster => <Monster key={monster.stringId} {...monster} />)}
            </Flex>
        );
    }
}

export default MonsterList;
