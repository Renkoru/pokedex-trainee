import React from 'react';
import ReactDom from 'react-dom';

import { getRandom } from './utils';
import App from './App.jsx';


ReactDom.render(
    <App />,
    document.getElementById('pageContainer')
);

