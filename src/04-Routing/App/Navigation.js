import React from 'react';

function NavLink({ path, name, onClick }) {
  function _onClick(event) {
    event.preventDefault();

    onClick(path);
  }

  return (
    <a href={path} onClick={_onClick}>
      {name}
    </a>
  );
}

function Navigation({ onLinkClick }) {
  return (
    <div>
      <NavLink path="/forest" name="Forest" onClick={onLinkClick} />
      &nbsp;/&nbsp;
      <NavLink path="/trainer" name="Trainer" onClick={onLinkClick} />
    </div>
  );
}

export default Navigation;
