import React from 'react';

import Title from 'Shared/Title';

function Header({ children }) {
  return (
    <div>
      <Title>You are in the forest</Title>
      <Title type="subtitle">{children}</Title>
    </div>
  );
}

export default Header;
