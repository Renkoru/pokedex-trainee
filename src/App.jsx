import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import store from './store';
import { Player as PlayerModel } from './models';
import { Button, Flex, Heading } from './components';
import AdminPlayerList from './components/AdminPlayerList.jsx';
import PlayersList from './containers/PlayersList.jsx';
import PlayerProfile from './containers/PlayerProfile.jsx';
import NavBar from './containers/NavBar.jsx';
import PlayerAdd from './components/PlayerAdd.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <Router>
              <Provider store={store}>
                <div>

                  <NavBar />

                  <Route exact path="/" component={PlayerProfile} />
                  <Route exact path="/players" component={PlayersList} />
                  <Route exact path="/admin" component={AdminPlayerList} />
                  <Route exact path="/add-player" component={PlayerAdd} />

                </div>
              </Provider>
            </Router>
        );
    }

}

export default App;
