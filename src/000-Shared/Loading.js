import React from 'react';

function Loading({ dataList, children }) {
  const isLoaded = dataList.every(x => !!x);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <div>{children()}</div>;
}

export default Loading;
