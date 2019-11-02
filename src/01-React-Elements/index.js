import React from 'react';
import ReactDOM from 'react-dom';

import Catch from './Catch';
import Pokemon from './Pokemon';
import Header from './Header';

const MainContainer = React.createElement(
  'div',
  {
    style: {
      margin: '100px',
      display: 'flex',
      width: '80%',
    },
  },
  Catch,
  Pokemon,
);

const App = React.createElement('div', {}, Header, MainContainer);

ReactDOM.render(App, document.getElementById('app'));
