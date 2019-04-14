import React from 'react';
import ReactDOM from 'react-dom';

import { PokemonProvider } from './store';
import App from './App';

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
  document.getElementById('app'),
);
