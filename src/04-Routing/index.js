import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import Section from 'Components/Section';
import Router from 'Components/Router';
import Link from 'Components/Link';

import Garden from './scenes/Garden';
import Trainer from './scenes/Trainer';

const Header = styled.h1`
  font-size: 38px;
  text-align: center;
  padding-bottom: 50px;
`;

function App() {
  const [trainerPokemons, setTrainerPokemons] = useState([]);

  return (
    <Section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        <Link to="/trainer">Trainer</Link>
      </nav>
      <Router>
        <Header path="/">Catch them All!</Header>
        <Garden
          path="/garden"
          trainerPokemons={trainerPokemons}
          setTrainerPokemons={setTrainerPokemons}
        />
        <Trainer path="/trainer" trainerPokemons={trainerPokemons} />
      </Router>
    </Section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
