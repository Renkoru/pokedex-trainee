import React, { useEffect, useReducer } from 'react';
import { Router } from '@reach/router';

import Navbar from 'Shared/Navbar';
import Container from 'Shared/Container';
import { getPokemons, getTrainerPokemons } from 'Services/api';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';
import Pokedex from './scenes/Pokedex';

import { connect } from './store';

function App({ profile, setAllPokemons, setTrainerPokemons }) {
  useEffect(() => {
    getPokemons().then(pokemons => setAllPokemons(pokemons));
    getTrainerPokemons(profile.id).then(pokemons =>
      setTrainerPokemons(pokemons),
    );
  }, []);

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item url="/">Pokedex</Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Start>
            <Navbar.Item url="/garden">Garden</Navbar.Item>
            <Navbar.Item url="/trainer">Trainer</Navbar.Item>
            <Navbar.Item url="/pokedex">Pokedex</Navbar.Item>
          </Navbar.Start>
        </Navbar.Menu>
      </Navbar>

      <Container>
        <Router>
          <Garden default path="/garden" trainer={profile} />
          <Trainer path="/trainer" />
          <Pokedex path="/pokedex" />
        </Router>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  profile: state.profile,
  setAllPokemons: state.setAllPokemons,
  setTrainerPokemons: state.setTrainerPokemons,
});
export default connect(mapStateToProps)(App);
