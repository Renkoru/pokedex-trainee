import React from 'react';

function Router({ route, children }) {
  let result = null;

  React.Children.forEach(children, child => {
    if (child.props.path === route) {
      result = child;
    }
  });

  return <>{result}</>;
}

function Route({ render }) {
  return render();
}

Router.Route = Route;

export default Router;
