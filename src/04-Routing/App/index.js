import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Section from 'Shared/layout/Section';

import Navigation from './Navigation';
import { Forest, Trainer } from '../scenes';

function App() {
  return (
    <div>
      <Navigation />

      <Section>
        <Section>
          <Switch>
            <Route path="/forest">
              <Forest />
            </Route>
            <Route path="/trainer">
              <Trainer />
            </Route>
          </Switch>
        </Section>
      </Section>
    </div>
  );
}

export default App;
