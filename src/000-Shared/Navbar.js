import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import classNames from 'classnames';

class Navbar extends React.Component {
  static Item({ url, children }) {
    const getProps = ({ isCurrent }) => {
      return {
        className: classNames('navbar-item', {
          'is-active': isCurrent,
        }),
      };
    };

    return (
      <Link getProps={getProps} to={url}>
        {children}
      </Link>
    );
  }

  static Brand({ children }) {
    return <div className="navbar-brand">{children}</div>;
  }

  static Menu({ children }) {
    return <div className="navbar-menu">{children}</div>;
  }

  static Start({ children }) {
    return <div className="navbar-start">{children}</div>;
  }

  static End({ children }) {
    return <div className="navbar-end">{children}</div>;
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {this.props.children}
      </nav>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
