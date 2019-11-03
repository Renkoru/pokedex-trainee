import React from 'react';

function Pokemon({ imageUrl, name, className }) {
  return <img alt={name} src={imageUrl} css={{ height: '150px' }} className={className} />;
}

export default Pokemon;
