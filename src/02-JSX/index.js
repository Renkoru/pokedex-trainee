import React from 'react';
import ReactDOM from 'react-dom';

const pokeballRef = React.createRef();
const pokeball = <div className="mr-pokeball" ref={pokeballRef} />;
const pContainer = (
  <div className="mr-container" ref={pokeballRef}>
    {pokeball}
  </div>
);

const catchButton = (
  <button
    style={{ fontSize: '24px' }}
    onClick={() => {
      pokeballRef.current.classList.add('mr-throw');
      window.setTimeout(() => pokeballRef.current.classList.remove('mr-throw'), 1300);
    }}
  >
    Catch!
  </button>
);

const catchContainer = (
  <div style={{ textAlign: 'center', width: '200px' }}>
    {pContainer}
    {catchButton}
  </div>
);

const pokemonContainer = (
  <img
    src="/images/pokemons/001.gif"
    style={{
      marginLeft: 'auto',
      height: '200px',
    }}
  />
);

const mainContainer = (
  <div
    style={{
      margin: '200px',
      display: 'flex',
      width: '30%',
    }}
  >
    {catchContainer}
    {pokemonContainer}
  </div>
);

const header = <h1 style={{ fontSize: '64px' }}>Catch them All!</h1>;

const app = (
  <div>
    {header}
    {mainContainer}
  </div>
);

ReactDOM.render(app, document.getElementById('app'));
