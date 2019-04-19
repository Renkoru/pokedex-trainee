import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store, { PokemonProvider } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </Provider>,
  document.getElementById('app'),
);
