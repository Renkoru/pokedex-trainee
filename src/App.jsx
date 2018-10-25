import React from 'react';

import { getRandom } from './utils';
import Button from './components/Button.jsx';
import Player from './components/Player.jsx';


function App({ players, onAddPlayer, onResetLocation }) {

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
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {players.map((player) => <Player {...player}/> )}
            </div>
        </div>
    );
}

export default App;
