import createElement from './utils';

const Catch = createElement({
  css: 'text-align: center; width: 200px',
});

const PokeballContainer = createElement({ className: 'mr-container' });

const Pokeball = createElement({ className: 'mr-pokeball' });

const CatchButton = createElement({
  el: 'button',
  html: 'Catch',
  css: 'font-size: 24px; cursor: pointer;',
  onClick: () => {
    Pokeball.classList.add('mr-throw');
    window.setTimeout(() => Pokeball.classList.remove('mr-throw'), 1000);
  },
});

PokeballContainer.appendChild(Pokeball);
Catch.appendChild(PokeballContainer);
Catch.appendChild(CatchButton);

export default Catch;
