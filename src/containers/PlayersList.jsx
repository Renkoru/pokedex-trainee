import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Flex } from '../components';
import { withStore } from '../containers/Provider.jsx';
import Player from '../components/Player.jsx';


const PlayersList = ({ players, monsters }) => {
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

};

const mapStateToProps = (state) => {
    const {
        playersState: {
            players,
            playersMonsters,
        },
    } = state;

    return {
        players,
        monsters: playersMonsters,
    };
};

export default connect(mapStateToProps)(PlayersList);
