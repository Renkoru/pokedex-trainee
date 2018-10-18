import React from 'react';
import ReactDom from 'react-dom';

import { Player as PlayerModel } from './models';
import { getRandom } from './utils';
import Button from './components/Button';
import Player from './components/Player';


const players = [];


function appComponent({ players, onAddPlayer, onResetLocation }) {

    // trainers.style.cssText = [
    //     "display: flex;",
    //     "align-items: center;",
    //     "flex-wrap: wrap;",
    // ].join(' ');

    return (
        <div>
            <Button
                title="Add Player"
                onClick={onAddPlayer}
            />
            <Button
                title="Reset Location"
                onClick={onResetLocation}
            />
            <div>
                {players.map((player) => <Player {...player}/> )}
            </div>
        </div>
    );
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

