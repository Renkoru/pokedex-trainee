import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import Section from 'Components/Section';

import Garden from './scenes/Garden';

const Header = styled.h1`
  font-size: 38px;
  text-align: center;
  padding-bottom: 50px;
`;

function App() {
  return (
    <Section>
      <Header>Catch them All!</Header>
      <Garden />
    </Section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
