import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

const Pokemon = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

function Pocket({ trainerPokemons, pocket }) {
  if (isEmpty(pocket)) {
    return <Header>Empty pocket</Header>;
  }

  const pokemons = trainerPokemons.filter(
    ({ id }) => pocket.indexOf(id) !== -1,
  );

  return (
    <div>
      <Header>Pocket:</Header>
      {pokemons.map(({ name, pid }) => (
        <Pokemon key={pid}>{capitalize(name)}</Pokemon>
      ))}
    </div>
  );
}

Pocket.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  trainerPokemons: state.trainerPokemons,
  pocket: state.pocket,
});

export default connect(mapStateToProps)(Pocket);
