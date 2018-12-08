import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { setCurrentPlayer, playersResetLocation } from '../store';
import { Button, Flex, Box } from '../components';
import { routes } from '../constants';
import AdminPlayer from './AdminPlayer.jsx';


const listStyle = {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '80%',
};

class AdminPlayerList extends React.Component {
    constructor(props) {
        super(props);

        this.onSetCurrentPlayer = this.onSetCurrentPlayer.bind(this);
        this.onResetLocation = this.onResetLocation.bind(this);
    }

    onSetCurrentPlayer(playerId) {
        this.props.setCurrentPlayer(playerId);
    }

    onResetLocation() {
        this.props.playersResetLocation('Omsk');
    }

    render() {
        return (
            <Flex>
              <ul css={listStyle}>
                {this.props.players.map((player, index) => (
                    <li key={index}>
                      <AdminPlayer
                        onSetCurrentPlayer={this.onSetCurrentPlayer}
                        {...player}
                      />
                    </li>
                ))}
              </ul>

              <Box ml="auto" mt="5px" mr="10px">
                <Link to={routes.addPlayer}>
                  <Button>
                    Add Player
                  </Button>
                </Link>
                <Button onClick={this.onResetLocation} ml="20px" >
                  Reset Location
                </Button>
              </Box>
            </Flex>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        playersState: {
            players,
        },
    } = state;

    return {
        players,
    };
};


export default connect(mapStateToProps, { setCurrentPlayer, playersResetLocation })(AdminPlayerList);
