import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { fetchMe } from 'Services/api';
import Section from 'Components/layout/Section';

import Navigation from './Navigation';
import Router from './Router';
import Forest from '../scenes/Forest';
import Trainer from '../scenes/Trainer';
// import styles from './App.scss';

function App() {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMe();
      setUser(data);
    }
    fetchData();
  }, []);

  function onLinkClick(path) {
    setRoute(path);
    window.history.replaceState({}, '', path);
  }

  return (
    <Section>
      <AppHeader>Catch them All!</AppHeader>
      <Navigation onLinkClick={onLinkClick} />
      <Section>
        <Router route={route}>
          <Router.Route path="/forest" render={() => <Forest user={user} />} />
          <Router.Route path="/trainer" render={() => <Trainer />} />
        </Router>
      </Section>
    </Section>
  );
}

// CSS-modules (+SCSS)
// function AppHeader({ children }) {
//   return <h1 className={styles.header}>{children}</h1>;
// }

// CSS-in-JS
const AppHeader = styled('h1')({
  fontSize: '30px',
  textAlign: 'center',
  paddingBottom: '50px',
  fontStyle: 'italic',
});

export default App;
