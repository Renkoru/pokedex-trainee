import React from 'react';


export const StoreContext = React.createContext({});


export function withStore(WrappedComponent) {
    class WithStoreComponent extends React.Component {
        render () {
            return (
                <WrappedComponent
                  store={this.context.store}
                  dispatch={this.context.dispatch}
                  {...this.props}
                />
            );
        }
    }

    WithStoreComponent.contextType = StoreContext;
    return WithStoreComponent;
}


export const ADD_MONSTER = "ADD_MONSTER";


class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: {},
        };

        this.dispatch = this.dispatch.bind(this);
        this.onMonsterAdd = this.onMonsterAdd.bind(this);
    }

    dispatch(action) {
        console.log('\n>>>>>> Got Action');
        console.log(action);
        console.log('<<<<<< end block Got Action');

        if (action.type === ADD_MONSTER) {
            this.onMonsterAdd(action.playerId, action.monster);
        }
    }

    onMonsterAdd(playerId, monster) {
        const { monsters } = this.state;
        const playerMonsters = monsters[playerId] || [];

        this.setState({
            monsters: {
                ...monsters,
                [playerId]: [...playerMonsters, monster]
            }
        });
    }

    render () {
        const contextValue = {
            store: this.state,
            dispatch: this.dispatch,
        };

        return (
            <StoreContext.Provider value={contextValue}>
              {this.props.children}
            </StoreContext.Provider>
        );
    }

}

export default Provider;

