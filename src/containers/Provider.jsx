import React from 'react';

import Store from '../store';


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


class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.store = new Store((newState) => this.setState(newState));

        this.state = {
            ...this.store.store,
        };
    }

    render () {
        const contextValue = {
            store: this.state,
            dispatch: this.store.dispatch,
        };

        return (
            <StoreContext.Provider value={contextValue}>
              {this.props.children}
            </StoreContext.Provider>
        );
    }

}

export default Provider;
