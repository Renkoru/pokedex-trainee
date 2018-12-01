import React from 'react';
import { Link } from "react-router-dom";

import { Flex } from '../components';
import Player from '../components/Player.jsx';


export default ({ players }) => (
    <div>
      <Flex flexWrap="wrap" alignItems="center" mt="50px">
        {players.map((player, index) => (
            <Player
              key={index}
              {...player}
            />
        ))}
      </Flex>
    </div>
);
