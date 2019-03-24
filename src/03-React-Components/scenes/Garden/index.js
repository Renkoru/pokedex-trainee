import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Button from 'Components/Button';
import Container from 'Components/Container';
import Flex from 'Components/Flex';

import Pokemon from './Pokemon';
import Pokeball from './Pokeball';

const CatcherContainer = styled.div`
  text-align: center;
  width: 200px;
`;

class Garden extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isThrown: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isThrown: true });
    window.setTimeout(() => this.setState({ isThrown: false }), 1300);
  }

  render() {
    return (
      <Container>
        <Flex>
          <CatcherContainer>
            <Pokeball thrown={this.state.isThrown} />

            <Button onClick={this.onClick} size="medium" light>
              Catch!
            </Button>
          </CatcherContainer>

          <Pokemon pid="003" css={css({ marginLeft: '160px' })} />
        </Flex>
      </Container>
    );
  }
}

export default Garden;
