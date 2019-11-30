import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Section from 'Shared/layout/Section';

import Notifications from './Notifications';
import Forest from '../scenes/Forest';
import Trainer from '../scenes/Trainer';
import Navigation from './Navigation';
import { useStoreData } from './hooks';

function App() {
  useStoreData();

  return (
    <div>
      <Navigation />

      <Notifications />

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
    </div>
  );
}

export default App;
