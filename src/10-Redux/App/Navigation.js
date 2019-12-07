import React from 'react';

import styled from '@emotion/styled';
import Navbar from 'Shared/Navbar';

import { useSelector } from 'react-redux';

function Navigation() {
  const user = useSelector(state => state.user);

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item url="/">
          <b>Catch them All!</b>
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Start>
          <Navbar.Item url="/forest">Forest</Navbar.Item>
          <Navbar.Item url="/trainer">Trainer</Navbar.Item>
        </Navbar.Start>
        <Navbar.End>
          <User>{user && user.name}</User>
        </Navbar.End>
      </Navbar.Menu>
    </Navbar>
  );
}

const User = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '10px',
  paddingRight: '10px',
});

export default Navigation;
