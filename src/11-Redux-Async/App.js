import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { connect } from 'react-redux';

import Navbar from 'Shared/Navbar';
import Container from 'Shared/Container';
import { getPokemons, getTrainerPokemons } from 'Services/api';

import { setAllPokemons } from './store/mainActions';
import { setTrainerPokemons } from './store/trainerActions';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';
import Pokedex from './scenes/Pokedex';

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
          <Garden default path="/garden" />
          <Trainer path="/trainer" />
          <Pokedex path="/pokedex" />
        </Router>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  profile: { id: state.trainer.id, name: state.trainer.name },
});
const mapDispatchToProps = dispatch => ({
  setAllPokemons: pokemons => dispatch(setAllPokemons(pokemons)),
  setTrainerPokemons: pokemons =>
    dispatch(setTrainerPokemons(pokemons)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
