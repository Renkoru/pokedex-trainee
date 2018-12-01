import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Player as PlayerModel } from './models';
import { Button, Flex, Heading } from './components';
import AdminPlayerList from './components/AdminPlayerList.jsx';
import PlayersList from './containers/PlayersList.jsx';
import PlayerProfile from './containers/PlayerProfile.jsx';
import PlayerAdd from './components/PlayerAdd.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        const initialPlayers = [
            PlayerModel(),
            PlayerModel(),
            PlayerModel(),
        ];

        this.state = {
            players: [...initialPlayers],
            currentPlayerId: null,
            monsters: {},
        };


        this.onAddPlayer = this.onAddPlayer.bind(this);
        this.onResetLocation = this.onResetLocation.bind(this);
        this.onMonsterAdd = this.onMonsterAdd.bind(this);
        this.onSetCurrentPlayer = this.onSetCurrentPlayer.bind(this);
    }

    onAddPlayer(player) {
        const { players } = this.state;

        this.setState({
            players: [...players, player]
        });
    }

    onSetCurrentPlayer(playerId) {
        this.setState({
            currentPlayerId: playerId,
        });
    }

    onMonsterAdd(playerId, monster) {
        const { monsters } = this.state;
        this.setState({
            monsters: {
                ...monsters,
                [playerId]: [...monsters[playerId], monster]
            }
        });
    }

    onResetLocation() {
        const { players } = this.state;

        this.setState({
            players: players.map((player) => ({ ...player, location: 'Omsk' }))
        });
    }

    getCurrentPlayer() {
        const { players, currentPlayerId } = this.state;

        if (!currentPlayerId) {
            return {};
        }

        return players.find(({ id }) => id === currentPlayerId);
    }

    getCurrentMonsters() {
        const { monsters, currentPlayerId } = this.state;

        if (!currentPlayerId) {
            return [];
        }

        return monsters[currentPlayerId] || [];
    }

    render () {
        const navBarLinks = { marginRight: '15px' };
        return (
            <Router>
              <div>
                <Heading>Players net.</Heading>
                <ul css={{ listStyleType: 'none', display: 'flex' }}>
                  <li css={navBarLinks}>
                    <Link to="/">Home</Link>
                  </li>
                  <li css={navBarLinks}>
                    <Link to="/players">Players</Link>
                  </li>
                  <li css={navBarLinks}>
                    <Link to="/admin">Admin</Link>
                  </li>
                </ul>

                <Route
                  exact
                  path="/"
                  render={(props) => (
                      <PlayerProfile
                        player={this.getCurrentPlayer()}
                        monsters={this.getCurrentMonsters()}
                        onMonsterAdd={this.onMonsterAdd}
                        {...props}
                      />
                  )}
                />

                <Route
                  exact
                  path="/admin"
                  render={(props) => (
                      <AdminPlayerList
                        players={this.state.players}
                        onResetLocation={this.onResetLocation}
                        onSetCurrentPlayer={this.onSetCurrentPlayer}
                        {...props}
                      />
                  )}
                />

                <Route
                  exact
                  path="/players"
                  render={(props) => (
                      <PlayersList
                        players={this.state.players}
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
