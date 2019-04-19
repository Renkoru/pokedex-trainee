import React from 'react';
import styled from '@emotion/styled';

import { connect } from 'react-redux';

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

function Profile({ pokemons, pocket }) {
  const amount = pokemons.length;
  const inPoketAmount = pocket.length;

  return (
    <div>
      <Header>
        {`Pokemons: ${amount}`}/{`In pocket: ${inPoketAmount}`}
      </Header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.trainerPokemons,
    pocket: state.poket,
  };
}

export default connect(mapStateToProps)(Profile);
