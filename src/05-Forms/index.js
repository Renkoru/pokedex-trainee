import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Router, Link } from '@reach/router';

import Section from 'Components/Section';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';

const Header = styled.h1`
  font-size: 38px;
  text-align: center;
  padding-bottom: 50px;
`;

const Nav = styled.nav`
  a {
    margin-right: 10px;
  }
`;

function App() {
  const [trainerPokemons, setTrainerPokemons] = useState([]);

  return (
    <Section>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        <Link to="/trainer">Trainer</Link>
      </Nav>
      <Router>
        <Header path="/">Catch them All!</Header>
        <Garden
          path="/garden"
          trainerPokemons={trainerPokemons}
          setTrainerPokemons={setTrainerPokemons}
        />
        <Trainer
          path="/trainer"
          pokemons={trainerPokemons}
          setTrainerPokemons={setTrainerPokemons}
        />
      </Router>
    </Section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
