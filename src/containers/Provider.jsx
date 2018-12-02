import React from 'react';


export const StoreContext = React.createContext({});


export function withStore(WrappedComponent) {
    class WithStoreComponent extends React.Component {
        render () {
            return (
                <WrappedComponent
                  monsters={this.context.monsters}
                  onMonsterAdd={this.context.onMonsterAdd}
                  {...this.props}
                />
            );
        }
    }

    WithStoreComponent.contextType = StoreContext;
    return WithStoreComponent;
}


class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: {},
        };

        this.onMonsterAdd = this.onMonsterAdd.bind(this);
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
            monsters: this.state.monsters,
            onMonsterAdd: this.onMonsterAdd,
        };

        return (
            <StoreContext.Provider value={contextValue}>
              {this.props.children}
            </StoreContext.Provider>
        );
    }

}

export default Provider;

