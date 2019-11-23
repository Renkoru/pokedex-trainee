import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { fetchMe } from 'Services/api';
import Section from 'Shared/layout/Section';

import Notifications from './Notifications';
import Forest from '../scenes/Forest';
import Trainer from '../scenes/Trainer';
import Navigation from './Navigation';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMe();
      setUser(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navigation />

      <Notifications />

      <Section>
        <Switch>
          <Route path="/forest">
            <Forest user={user} />
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
