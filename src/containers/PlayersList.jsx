import React from 'react';
import { Link } from "react-router-dom";

import { Flex } from '../components';
import Player from '../components/Player.jsx';


export default ({ players, monsters }) => {
    return (
        <div>
          <Flex flexDirection="column" alignItems="center" mt="50px">
            {players.map((player, index) => (
                <Player
                  key={index}
                  monsters={monsters[player.stringId] || []}
                  {...player}
                />
            ))}
          </Flex>
        </div>
    );

}
