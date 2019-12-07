import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import { addTrainerPokemon as addTrainerPokemonAPI } from 'Services/api';
import Button from 'Shared/Button';
import { notificationAdd, trainerPokemonsAdd } from 'Store/actions';

import Pokemon from './Pokemon';
import Catch from './Catch';

function PlayGround({ onCatch, pokemon, onSkip, user, trainerPokemonsAdd, notificationAdd }) {
  async function _onCatch() {
    let notification;
    if (isCaught()) {
      const caughtPokemon = await addTrainerPokemonAPI(user.id, pokemon.pid);
      trainerPokemonsAdd(caughtPokemon);

      notification = {
        type: 'success',
        message: (
          <span>
            Pokemon <b>{caughtPokemon.name}</b> caught!
          </span>
        ),
      };
    } else {
      notification = {
        type: 'danger',
        message: (
          <span>
            Pokemon <b>{pokemon.name}</b> escaped!
          </span>
        ),
      };
    }

    notificationAdd(notification);

    onCatch();
  }

  return (
    <Container>
      <Catch onClick={_onCatch} />
      <div
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 'auto' }}
      >
        <Pokemon
          pid={pokemon.pid}
          imageUrl={pokemon.imageUrl}
          css={{ marginLeft: 'auto', alignSelf: 'flex-end' }}
        />
        <Button css={{ fontSize: '14px', width: '100px', marginTop: 'auto' }} onClick={onSkip}>
          Skip
        </Button>
      </div>
    </Container>
  );
}

const Container = styled('div')({
  flexGrow: '1',
  display: 'flex',
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(
  mapStateToProps,
  { notificationAdd, trainerPokemonsAdd },
)(PlayGround);
