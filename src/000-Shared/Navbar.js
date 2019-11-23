import React from 'react';
import { NavLink } from 'react-router-dom';

function Item({ url, children }) {
  return (
    <NavLink exact className="navbar-item" activeClassName="is-active" to={url}>
      {children}
    </NavLink>
  );
}

function Brand({ children }) {
  return <div className="navbar-brand">{children}</div>;
}

function Menu({ children }) {
  return <div className="navbar-menu">{children}</div>;
}

function Start({ children }) {
  return <div className="navbar-start">{children}</div>;
}

function End({ children }) {
  return <div className="navbar-end">{children}</div>;
}

function Navbar({ children }) {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      {children}
    </nav>
  );
}

Navbar.Item = Item;
Navbar.Brand = Brand;
Navbar.Menu = Menu;
Navbar.Start = Start;
Navbar.End = End;

export default Navbar;
