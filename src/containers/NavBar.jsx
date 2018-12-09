import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { routes } from '../constants';
import { Button, Flex, Heading } from '../components';


export function NavBarComponent({ currentPlayer, errorMessage = '' }) {
    const navBarLinks = { marginRight: '15px' };

    return (
        <nav css={{ backgroundColor: '#92ef9d', padding: '2px 5px' }}>
          <Flex alignItems="center">
            <Heading>Players net. {errorMessage}</Heading>

            <ul css={{ listStyleType: 'none', display: 'flex' }}>
              <li css={navBarLinks}>
                <Link to={routes.home}>Home</Link>
              </li>
              <li css={navBarLinks}>
                <Link to={routes.players}>Players</Link>
              </li>
              <li css={navBarLinks}>
                <Link to={routes.admin}>Admin</Link>
              </li>
            </ul>

            <Heading ml="auto" mr="20px">
              {currentPlayer.name} : {currentPlayer.age} ({currentPlayer.location})
            </Heading>
          </Flex>
        </nav>
    );
}

function mapStateToProps(state) {
    const { playersState: { players, currentPlayerId } } = state;
    let currentPlayer = {};

    if (!!currentPlayerId) {
        currentPlayer =  players.find(({ stringId }) => stringId === currentPlayerId);
    }

    return {
        currentPlayer,
        errorMessage: state.monstersState.errorMessage,
    };
}


export default connect(mapStateToProps)(NavBarComponent);
