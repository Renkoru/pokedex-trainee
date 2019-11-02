import React from 'react';

const pokeballRef = React.createRef();

const Pokeball = <div className="mr-pokeball" ref={pokeballRef} />;

const PokeballContainer = (
  <div className="mr-container" ref={pokeballRef}>
    {Pokeball}
  </div>
);

const CatchButton = (
  <button
    type="button"
    style={{ fontSize: '24px' }}
    onClick={() => {
      pokeballRef.current.classList.add('mr-throw');
      window.setTimeout(() => pokeballRef.current.classList.remove('mr-throw'), 1300);
    }}
  >
    Catch!
  </button>
);

const Catch = (
  <div style={{ textAlign: 'center', width: '200px' }}>
    {PokeballContainer}
    {CatchButton}
  </div>
);

export default Catch;
