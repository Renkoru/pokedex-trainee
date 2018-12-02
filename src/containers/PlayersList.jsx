import React from 'react';
import { Link } from "react-router-dom";

import { Flex } from '../components';
import { StoreContext } from '../containers/Provider.jsx';
import Player from '../components/Player.jsx';


const PlayersList = ({ players }) => {
    return (
        <div>
          <StoreContext.Consumer>
            {context => (
                <Flex flexDirection="column" alignItems="center" mt="50px">
                  {players.map((player, index) => (
                      <Player
                        key={index}
                        monsters={context.monsters[player.stringId] || []}
                        {...player}
                      />
                  ))}
                </Flex>
            )}
          </StoreContext.Consumer>
        </div>
    );

};

export default PlayersList;
