import React from 'react';
import capitalize from 'lodash/capitalize';

import Table from 'Shared/Table';
import PokemonImage from 'Components/PokemonImage';

import { connect } from '../../store';

function Pocketable({ pokemons, trainerPokemons }) {
  const ownedIds = new Set();
  trainerPokemons.forEach(pokemon => {
    ownedIds.add(pokemon.pid);
  });

  return (
    <Table head={['Image', 'Id', 'Name', 'Weight', 'Owned']}>
      {pokemons.map(({ pid, name, weight, imageUrl }) => {
        const isKnown = ownedIds.has(pid);
        return (
          <Table.Tr key={pid} selected={ownedIds.has(pid)}>
            <td>
              <PokemonImage size="medium" src={imageUrl} />
            </td>
            <td>{pid}</td>
            <td>{isKnown ? capitalize(name) : '???'}</td>
            <td>{isKnown ? weight : '???'}</td>
            <td>{isKnown ? 'Owned' : 'Unknown'}</td>
          </Table.Tr>
        );
      })}
    </Table>
  );
}

function Pokedex({ pokemons, trainerPokemons }) {
  return (
    <div>
      <Pocketable
        pokemons={pokemons}
        trainerPokemons={trainerPokemons}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  trainerPokemons: state.trainerPokemons,
});

export default connect(mapStateToProps)(Pokedex);
