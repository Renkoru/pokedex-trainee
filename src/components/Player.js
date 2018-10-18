import React from 'react';

import { getRandom } from '../utils';
import Button from './Button';


function playerComponent({stringId, name, age, location }) {
    var sayHiButton = Button({
        title: 'Say Hi!',
        onClick: () => alert('Hi Mates!'),
    });

    var image = React.createElement(
        'img',
        {
            src: '../static/images/trainers/' + stringId + '.gif',
            width: 100,
        }
    );
    // image.style.cssText = [
    //     "margin-left: auto;",
    //     "margin-right: auto;",
    // ].join(' ');

    // component.style.cssText = [
    //     "border: 4px solid saddlebrown;",
    //     "height: 210px;",
    //     "width: 190px;",
    //     "text-align: center;",
    //     "padding: 5px 10px;",
    //     "margin: 5px 20px;",
    //     "display: flex;",
    //     "flex-direction: column;",
    // ].join(' ');

    var content = React.createElement(
        'div',
        {},
        `${name} : ${age}`,
    );
    // content.style.cssText = [
    //     "margin-top: auto;",
    // ].join(' ');

    var loc = React.createElement(
        'div',
        {},
        `Loc: ${location}`,
    );
    // loc.style.cssText = [
    //     "margin-top: auto;",
    // ].join(' ');

    var component = React.createElement(
        'div',
        {},
        // image,
        content,
        loc,
        sayHiButton,
    );

    return component;
}

export default playerComponent;
