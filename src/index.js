import React from 'react';
import ReactDom from 'react-dom';

import { Player as PlayerModel } from './models';
import { getRandom } from './utils';
import App from './App.jsx';


const players = [];


function tick() {
    ReactDom.render(
        <App
            players={players}
            onAddPlayer={() => {
                players.push(PlayerModel());
            }}
            onResetLocation={() => {
                players.forEach((player) => {
                    player.location = 'Omsk';
                });
            }}
        />,
        document.getElementById('pageContainer')
    );
}

setInterval(tick, 1000);

