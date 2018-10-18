import React from 'react';

import { getRandom } from '../utils';
import Button from './Button';


function playerComponent({stringId, name, age, location }) {

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

    // content.style.cssText = [
    //     "margin-top: auto;",
    // ].join(' ');

    // loc.style.cssText = [
    //     "margin-top: auto;",
    // ].join(' ');

    return (
        <div>
            <img
                src={`../static/images/trainers/${stringId}.gif`}
                width={100}
            />
            <div>
                {`${name} : ${age}`}
            </div>
            <div>
                {`Loc: ${location}`}
            </div>
            <Button
                title="Say Hi!"
                onClick={() => alert('Hi Mates!')}
            />
        </div>
    );
}

export default playerComponent;
