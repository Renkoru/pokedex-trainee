import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import Button from 'Shared/Button';
import { notificationAdd as notificationAddAction } from 'Store/actions';
import { trainerAddPokemon as trainerAddPokemonAction } from 'Store/trainerActions';

import Pokemon from './Pokemon';
import Catch from './Catch';

function PlayGround({ onCatch, pokemon, onSkip, user, trainerAddPokemon, notificationAdd }) {
  async function _onCatch() {
    let notification;
    if (isCaught()) {
      const caughtPokemon = await trainerAddPokemon(user.id, pokemon.pid);

      notification = {
        type: 'success',
        message: `Pokemon ${caughtPokemon.name} caught!`,
      };
    } else {
      notification = {
        type: 'danger',
        message: `Pokemon ${pokemon.name} escaped!`,
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
    user: state.main.user,
  };
}

export default connect(
  mapStateToProps,
  { notificationAdd: notificationAddAction, trainerAddPokemon: trainerAddPokemonAction },
)(PlayGround);
