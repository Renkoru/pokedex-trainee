import React from 'react';

import Navbar from 'Shared/Navbar';

function Navigation() {
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
      </Navbar.Menu>
    </Navbar>
  );
}

export default Navigation;
