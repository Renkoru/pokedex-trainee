const createElement = ({
  el = 'div',
  html = '',
  className = null,
  css = null,
  src = null,
  onClick = null,
}) => {
  const element = document.createElement(el);

  element.innerHTML = html;

  if (className) {
    element.className = className;
  }

  if (css) {
    element.style.cssText = css;
  }

  if (src) {
    element.src = src;
  }

  if (onClick) {
    element.onclick = onClick;
  }

  return element;
};

// Pokeball animation by:
// https://codepen.io/havardob/pen/GZXOox/
const pContainer = createElement({ className: 'mr-container' });
const pokeball = createElement({ className: 'mr-pokeball' });
pContainer.appendChild(pokeball);

const catchButton = createElement({
  el: 'button',
  html: 'Catch!',
  css: 'font-size: 24px',
  onClick: () => {
    pokeball.classList.add('mr-throw');
    window.setTimeout(() => pokeball.classList.remove('mr-throw'), 1000);
  },
});

const catchContainer = createElement({ css: 'text-align: center; width: 200px' });
catchContainer.appendChild(pContainer);
catchContainer.appendChild(catchButton);

const pokemonContainer = createElement({
  el: 'img',
  src: '/images/pokemons/001.gif',
  css: 'margin-left: auto; height: 200px',
});

const mainContainer = createElement({ css: 'margin: 200px; display: flex; width: 30%' });
mainContainer.appendChild(catchContainer);
mainContainer.appendChild(pokemonContainer);

const header = createElement({ el: 'h1', css: 'font-size: 64px', html: 'Catch them All!' });

const appContainer = document.getElementById('app');

appContainer.appendChild(header);
appContainer.appendChild(mainContainer);
