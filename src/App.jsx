import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Player as PlayerModel } from './models';
import { Button, Flex, Heading } from './components';
import PlayerList from './components/PlayerList.jsx';
import PlayerAdd from './components/PlayerAdd.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        };


        this.onAddPlayer = this.onAddPlayer.bind(this);
        this.onResetLocation = this.onResetLocation.bind(this);
    }

    onAddPlayer(player) {
        const { players } = this.state;

        this.setState({
            players: [...players, player]
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
            <Router>
                <div>
                    <Heading>Welcome to Lineate (Thumbtack) React mini-course!</Heading>
                    <Flex my={15}>
                        <Link to="/">Player List</Link>
                    </Flex>

                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <PlayerList
                                players={this.state.players}
                                onResetLocation={this.onResetLocation}
                                {...props}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/add-player"
                        render={(props) => (
                            <PlayerAdd
                                players={this.state.players}
                                onAddPlayer={this.onAddPlayer}
                                {...props}
                            />
                        )}
                    />
                </div>
            </Router>
        );
    }

}

export default App;
