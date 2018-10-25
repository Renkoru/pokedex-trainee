import React from 'react';

import { getRandom } from '../utils';
import Button from './Button.jsx';


function playerComponent({stringId, name, age, location }) {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                boxShadow: '2px 2px 3px #eee',
                height: '210px',
                width: '190px',
                textAlign: 'center',
                padding: '15px 15px',
                margin: '5px 20px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <img
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                src={`../static/images/trainers/${stringId}.gif`}
                width={100}
            />
            <div style={{ marginTop: 'auto' }}>
                {`${name} : ${age}`}
            </div>
            <div style={{ marginTop: 'auto' }}>
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
