import React from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import { addTrainerPokemon as addTrainerPokemonAPI } from 'Services/api';
import Button from 'Shared/Button';

import Pokemon from './Pokemon';
import Catch from './Catch';
import { useStore } from '../../../store';

function PlayGround({ onCatch, pokemon, onSkip }) {
  const { addNotification, addTrainerPokemon, user } = useStore();

  async function _onCatch() {
    let notification;
    if (isCaught()) {
      const caughtPokemon = await addTrainerPokemonAPI(user.id, pokemon.pid);
      addTrainerPokemon(caughtPokemon);

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

    addNotification(notification);

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

export default PlayGround;
