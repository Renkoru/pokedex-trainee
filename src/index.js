import { Player as PlayerModel } from './models';
import { getRandom } from './utils';
import Button from './components/Button';
import Player from './components/Player';


function renderer(domID, component) {
    var appContainer = document.getElementById(domID);

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
            var player = Player(PlayerModel());

            trainers.appendChild(player);
        },
    });

    component.appendChild(addPlayerButton);
    component.appendChild(trainers);

    return component;
}

renderer(
    'pageContainer',
    appComponent()
);
