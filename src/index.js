import { Player as PlayerModel } from './models';
import { getRandom } from './utils';
import Button from './components/Button';
import Player from './components/Player';


const players = [];


function renderer(domID, component) {
    var appContainer = document.getElementById(domID);
    appContainer.innerHTML = '';

    appContainer.appendChild(component);
}


function appComponent() {
    var component = document.createElement('div');
    var trainers = document.createElement('div');
    trainers.style.cssText = [
        "display: flex;",
        "align-items: center;",
        "flex-wrap: wrap;",
    ].join(' ');

    var addPlayerButton = Button({
        title: 'Add Player',
        onClick: function () {
            trainers.innerHTML = '';

            players.push(PlayerModel());
            players.forEach((player) => trainers.appendChild(Player(player)));
        },
    });

    var resetLocationButton = Button({
        title: 'Reset Location',
        onClick: function () {
            trainers.innerHTML = '';

            players.forEach((player) => {
                player.location = 'Omsk';
            });
            players.forEach((player) => trainers.appendChild(Player(player)));
        },
    });

    component.appendChild(addPlayerButton);
    component.appendChild(resetLocationButton);
    component.appendChild(trainers);

    return component;
}

renderer(
    'pageContainer',
    appComponent()
);
