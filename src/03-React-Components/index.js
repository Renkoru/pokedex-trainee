import React from 'react';
import ReactDOM from 'react-dom';

import Section from 'Components/Section';

import Garden from './scenes/Garden';

const app = (
  <Section>
    <h1 style={{ fontSize: '38px' }}>Catch them All!</h1>
    <Garden />
  </Section>
);

ReactDOM.render(app, document.getElementById('app'));
