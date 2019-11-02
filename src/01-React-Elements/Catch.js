import React from 'react';

const pokeballRef = React.createRef();
const Pokeball = React.createElement('div', {
  className: 'mr-pokeball',
  ref: pokeballRef,
});

const PokeballContainer = React.createElement('div', { className: 'mr-container' }, Pokeball);

const CatchButton = React.createElement(
  'button',
  {
    type: 'button',
    style: { fontSize: '24px' },
    onClick: () => {
      pokeballRef.current.classList.add('mr-throw');
      window.setTimeout(() => pokeballRef.current.classList.remove('mr-throw'), 1000);
    },
  },
  'Catch!',
);

const Catch = React.createElement(
  'div',
  { style: { textAlign: 'center', width: '200px' } },
  PokeballContainer,
  CatchButton,
);

export default Catch;
