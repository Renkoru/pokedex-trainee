import React from 'react';

function Router({ children }) {
  const pathname = window.location.pathname;

  let result = null;

  React.Children.forEach(children, child => {
    if (child.props.path === pathname) {
      result = child;
    }
  });

  return <>{result}</>;
}

export default Router;
