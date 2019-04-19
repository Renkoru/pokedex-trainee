import React from 'react';
import styled from '@emotion/styled';

import { connect } from 'react-redux';

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

function Profile({ pokemons, pocket }) {
  const amount = pokemons.length;
  const inPocketAmount = pocket.length;

  return (
    <div>
      <Header>
        {`Pokemons: ${amount}`}/{`In pocket: ${inPocketAmount}`}
      </Header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.trainerPokemons,
    pocket: state.pocket,
  };
}

export default connect(mapStateToProps)(Profile);
