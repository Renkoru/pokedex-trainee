import React from 'react';
import ReactDOM from 'react-dom';

const pokeballRef = React.createRef();
const pokeball = React.createElement('div', { className: 'mr-pokeball', ref: pokeballRef });
const pContainer = React.createElement('div', { className: 'mr-container' }, pokeball);

const catchButton = React.createElement(
  'button',
  {
    style: { fontSize: '24px' },
    onClick: () => {
      pokeballRef.current.classList.add('mr-throw');
      window.setTimeout(() => pokeballRef.current.classList.remove('mr-throw'), 1000);
    },
  },
  'Catch!',
);

const catchContainer = React.createElement(
  'div',
  { style: { textAlign: 'center', width: '200px' } },
  pContainer,
  catchButton,
);

const pokemonContainer = React.createElement('img', {
  src: '/images/pokemons/001.gif',
  style: {
    marginLeft: 'auto',
    height: '200px',
  },
});

const mainContainer = React.createElement(
  'div',
  {
    style: {
      margin: '200px',
      display: 'flex',
      width: '30%',
    },
  },
  catchContainer,
  pokemonContainer,
);

const header = React.createElement('h1', { style: { fontSize: '64px' } }, 'Catch them All!');

const app = React.createElement('div', {}, header, mainContainer);

ReactDOM.render(app, document.getElementById('app'));
