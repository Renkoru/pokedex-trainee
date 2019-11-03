import React from 'react';
import styled from '@emotion/styled';

import Section from 'Components/layout/Section';

import Forest from '../scenes/Forest';
// import styles from './App.scss';

function App() {
  return (
    <Section>
      <AppHeader>Catch them All!</AppHeader>
      <Section>
        <Forest />
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
