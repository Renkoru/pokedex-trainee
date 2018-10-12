import { getRandom } from '../utils';
import Button from './Button';


function playerComponent({ name, age, location }) {
    var component = document.createElement('div');
    var playerId = getRandom(154);
    var sayHiButton = Button({
        title: 'Say Hi!',
        onClick: () => alert('Hi Mates!'),
    });

    var image = document.createElement('img');
    image.src = '../static/images/trainers/' + playerId + '.gif';
    image.width = 100;
    image.style.cssText = [
        "margin-left: auto;",
        "margin-right: auto;",
    ].join(' ');

    component.style.cssText = [
        "border: 4px solid saddlebrown;",
        "height: 210px;",
        "width: 190px;",
        "text-align: center;",
        "padding: 5px 10px;",
        "margin: 5px 20px;",
        "display: flex;",
        "flex-direction: column;",
    ].join(' ');

    var content = document.createElement('div');
    content.innerHTML = name + ' : ' + age;
    content.style.cssText = [
        "margin-top: auto;",
    ].join(' ');

    var loc = document.createElement('div');
    loc.innerHTML = 'Loc: ' + location;
    loc.style.cssText = [
        "margin-top: auto;",
    ].join(' ');

    component.appendChild(image);
    component.appendChild(content);
    component.appendChild(loc);
    component.appendChild(sayHiButton);

    return component;
}

export default playerComponent;
