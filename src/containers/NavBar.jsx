import React from 'react';
import { Link } from "react-router-dom";

import { routes } from '../constants';
import { Button, Flex, Heading } from '../components';


export default function ({ currentPlayer }) {
    const navBarLinks = { marginRight: '15px' };

    return (
        <nav css={{ backgroundColor: '#92ef9d', padding: '2px 5px' }}>
          <Flex alignItems="center">
            <Heading>Players net.</Heading>

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
