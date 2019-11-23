import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';

import { fetchMe } from 'Services/api';
import Section from 'Shared/layout/Section';

import Navigation from './Navigation';
import Forest from '../scenes/Forest';
import Trainer from '../scenes/Trainer';
// import styles from './App.scss';

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

      <Section>
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
      </Section>
    </div>
  );
}

const AppHeader = styled('h1')({
  fontSize: '30px',
  textAlign: 'center',
  paddingBottom: '50px',
  fontStyle: 'italic',
});

export default App;
