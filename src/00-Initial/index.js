import { createElement } from './utils';

import Catch from './Catch';
import Pokemon from './Pokemon';
import Header from './Header';

const App = createElement({
  css: 'margin: 100px; display: flex; width: 80%',
});

const appContainer = document.getElementById('app');

App.appendChild(Catch);
App.appendChild(Pokemon);

appContainer.appendChild(Header);
appContainer.appendChild(App);
