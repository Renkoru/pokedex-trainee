import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Router, Link } from '@reach/router';

import Section from 'Components/Section';
// import { getPokemons } from 'Services/api';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';
import Pokedex from './scenes/Pokedex';

import { PokemonProvider } from './providers';

const Header = styled.h1`
  font-size: 38px;
  text-align: center;
  padding-bottom: 50px;
`;

const Home = () => {
  return <Header path="/home">Catch them All!</Header>;
};

const Nav = styled.nav`
  a {
    margin-right: 10px;
  }
`;

function App() {
  // useEffect(() => {
  //   getPokemons().then(pokemons => setAllPokemons(pokemons));
  // }, []);

  // const contextValue = {
  //   trainerPokemons,
  //   pokemons: allPokemons,
  // };

  return (
    <Section>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        <Link to="/trainer">Trainer</Link>
        <Link to="/pokedex">Pokedex</Link>
      </Nav>
      <PokemonProvider>
        <Router>
          <Home path="/" />
          <Garden
            path="/garden"
            /* trainerPokemons={trainerPokemons} */
            /* allPokemons={allPokemons} */
            /* setTrainerPokemons={setTrainerPokemons} */
          />
          <Trainer
            path="/trainer"
            /* pokemons={trainerPokemons} */
            /* setTrainerPokemons={setTrainerPokemons} */
          />
          <Pokedex path="/pokedex" />
        </Router>
      </PokemonProvider>
    </Section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
