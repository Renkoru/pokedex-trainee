import React from 'react';
import ReactDom from 'react-dom';

import { Player as PlayerModel } from './models';
import { getRandom } from './utils';
import Button from './components/Button';
import Player from './components/Player';


const players = [];


function appComponent({ players, onAddPlayer, onResetLocation }) {

    var playersList = players.map((player) => Player(player));
    var trainers = React.createElement('div', {}, ...playersList);

    // trainers.style.cssText = [
    //     "display: flex;",
    //     "align-items: center;",
    //     "flex-wrap: wrap;",
    // ].join(' ');

    var addPlayerButton = Button({
        title: 'Add Player',
        onClick: onAddPlayer,
    });

    var resetLocationButton = Button({
        title: 'Reset Location',
        onClick: onResetLocation,
    });

    var component = React.createElement(
        'div',
        {},
        addPlayerButton,
        resetLocationButton,
        trainers,
    );

    return component;
}

function tick() {
    ReactDom.render(
        appComponent({
            players,
            onAddPlayer: () => {
                players.push(PlayerModel());
            },
            onResetLocation: () => {
                players.forEach((player) => {
                    player.location = 'Omsk';
                });
            }
        }),
        document.getElementById('pageContainer')
    );
}

setInterval(tick, 1000);

