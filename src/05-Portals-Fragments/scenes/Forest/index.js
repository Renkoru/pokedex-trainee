import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Loading from 'Shared/Loading';
import { isCaught } from 'Services/pokemon';
import { fetchAllPokemons } from 'Services/api';
import NotificationList from 'Components/NotificationList';

import Header from './Header';
import Tree from './Tree';
import PlayGround from './PlayGround';
import { useNotifications } from './hooks';

function Forest() {
  const [notificationList, addNotification, removeNotification] = useNotifications([]);
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);

  function selectRandomPokemon(pokemons) {
    const randomIndex = random(0, pokemons.length);
    setForestPokemon(pokemons[randomIndex]);
  }

  useEffect(() => {
    async function fetchData() {
      const list = await fetchAllPokemons();

      setPokemonList(list);
      selectRandomPokemon(list);
    }
    fetchData();
  }, []);

  function onCatch() {
    let notification;
    if (isCaught()) {
      notification = {
        type: 'warning',
        message: (
          <span>
            Pokemon <b>{forestPokemon.name}</b> caught! (Implementation required)
          </span>
        ),
      };
    } else {
      notification = {
        type: 'danger',
        message: (
          <span>
            Pokemon <b>{forestPokemon.name}</b> escaped!
          </span>
        ),
      };
    }

    addNotification(notification);

    selectRandomPokemon(pokemonList);
  }

  return (
    <Loading dataList={[pokemonList, forestPokemon]}>
      {() => (
        <>
          <Header>
            Here are &nbsp;
            {pokemonList.length}
            &nbsp; pokemons. You met &nbsp;
            <b>{forestPokemon.name}</b>
            &nbsp;
          </Header>
          <ForestContainer>
            <Tree />

            <PlayGround pokemon={forestPokemon} onCatch={onCatch} />

            <Tree />
          </ForestContainer>

          <NotificationList notifications={notificationList} onClose={removeNotification} />
        </>
      )}
    </Loading>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
