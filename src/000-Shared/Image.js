import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src }) => (
  <figure
    className="image is-128x128"
    style={{
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* <img src={src} /> */}
  </figure>
);

Image.propTypes = {
  children: PropTypes.node,
};

export default Image;
