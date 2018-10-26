import React from 'react';

import { getRandom } from './utils';
import { Player as PlayerModel } from './models';
import Button from './components/Button.jsx';
import Player from './components/Player.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        };

        this.onAddPlayer = this.onAddPlayer.bind(this);
        this.onResetLocation = this.onResetLocation.bind(this);
    }

    onAddPlayer() {
        const { players } = this.state;

        this.setState({
            players: [...players, PlayerModel()]
        });
    }

    onResetLocation() {
        const { players } = this.state;

        this.setState({
            players: players.map((player) => ({ ...player, location: 'Omsk' }))
        });
    }

    render () {
        return (
            <div>
                <Button
                    title="Add Player"
                    onClick={this.onAddPlayer}
                />
                <Button
                    style={{ marginLeft: '20px' }}
                    title="Reset Location"
                    onClick={this.onResetLocation}
                />
                <div
                    style={{
                        marginTop: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {this.state.players.map((player, index) => <Player key={index} {...player}/> )}
                </div>
            </div>
        );
    }

}

export default App;
