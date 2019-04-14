import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import classNames from 'classnames';

class Form extends React.Component {
  static Field({ name, label, type, placeholder }) {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input name={name} className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    );
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
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(e);
        }}
      >
        {this.props.children}
        <div className="control">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
