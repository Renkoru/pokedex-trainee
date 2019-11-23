import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';

import { fetchMe } from 'Services/api';
import Section from 'Shared/layout/Section';

import NotificationList from 'Components/NotificationList';
import Forest from '../scenes/Forest';
import Trainer from '../scenes/Trainer';
import { useNotifications } from './hooks';
import Navigation from './Navigation';

function App() {
  const [notificationList, addNotification, removeNotification] = useNotifications([]);
  const [bagPokemonList, setBagPokemonList] = useState([]);
  const [user, setUser] = useState(null);

  function onBagAdd(selectedPokemon) {
    setBagPokemonList(list => [...list, selectedPokemon]);
  }

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

      <NotificationList notifications={notificationList} onClose={removeNotification} />

      <Section>
        <Switch>
          <Route path="/forest">
            <Forest user={user} addNotification={addNotification} bagPokemonList={bagPokemonList} />
          </Route>
          <Route path="/trainer">
            <Trainer bagPokemonList={bagPokemonList} onBagAdd={onBagAdd} />
          </Route>
        </Switch>
      </Section>
    </div>
  );
}

export default App;
