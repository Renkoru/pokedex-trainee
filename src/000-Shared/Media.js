import React from 'react';
import PropTypes from 'prop-types';

class Media extends React.Component {
  static Left({ children }) {
    return <div className="media-left">{children}</div>;
  }

  static Content({ children }) {
    return <div className="media-content">{children}</div>;
  }

  static Right({ children }) {
    return <div className="media-right">{children}</div>;
  }

  render() {
    return <article className="media">{this.props.children}</article>;
  }
}

Media.propTypes = {
  children: PropTypes.node,
};

export default Media;
