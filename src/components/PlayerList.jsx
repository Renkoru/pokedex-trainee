import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Player as PlayerModel } from '../models';
import { Button, Flex } from '../components';
import Player from './Player.jsx';


class PlayerList extends React.Component {
    render() {
        return (
            <div>
                <Link to="/add-player/">
                    <Button>
                        Add Player
                    </Button>
                </Link>
                <Button onClick={this.props.onResetLocation} ml="20px" >
                    Reset Location
                </Button>
                <Flex flexWrap="wrap" alignItems="center" mt="50px">
                    {this.props.players.map((player, index) => <Player key={index} {...player}/> )}
                </Flex>
            </div>
        );
    }
}

export default PlayerList;
