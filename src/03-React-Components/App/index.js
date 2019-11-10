import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { fetchMe } from 'Services/api';
import Section from 'Components/layout/Section';

import Forest from '../scenes/Forest';
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
    <Section>
      <AppHeader>Catch them All!</AppHeader>
      <Section>
        <Forest user={user} />
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
