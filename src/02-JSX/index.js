import React from 'react';
import ReactDOM from 'react-dom';

import Catch from './Catch';
import Pokemon from './Pokemon';
import Header from './Header';

const MainContainer = (
  <div
    style={{
      margin: '100px',
      display: 'flex',
      width: '80%',
    }}
  >
    {Catch}
    {Pokemon}
  </div>
);

const App = (
  <div>
    {Header}
    {MainContainer}
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
