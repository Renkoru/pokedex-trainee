import React from 'react';

import { getRandom } from './utils';
import { Player as PlayerModel } from './models';
import { Button, Flex } from './components';
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
                <Button onClick={this.onAddPlayer}>
                    Add Player
                </Button>
                <Button onClick={this.onResetLocation} ml="20px" >
                    Reset Location
                </Button>
                <Flex flexWrap="wrap" alignItems="center" mt="50px">
                    {this.state.players.map((player, index) => <Player key={index} {...player}/> )}
                </Flex>
            </div>
        );
    }

}

export default App;
