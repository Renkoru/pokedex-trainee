import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { connect } from 'react-redux';

import Navbar from 'Shared/Navbar';
import Container from 'Shared/Container';

import { fetchPokemons } from './store/mainActions';
import { fetchTrainerPokemons } from './store/trainerActions';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';
import Pokedex from './scenes/Pokedex';

function App({ profile, fetchPokemons, fetchTrainerPokemons }) {
  useEffect(() => {
    fetchPokemons();
    fetchTrainerPokemons(profile.id);
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

export default connect(
  mapStateToProps,
  { fetchPokemons, fetchTrainerPokemons },
)(App);
