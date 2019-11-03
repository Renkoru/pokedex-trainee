import React from 'react';
import classNames from 'classnames';

function Title({ children, type }) {
  const isSubtitle = type === 'subtitle';
  return (
    <div
      className={classNames({
        title: !isSubtitle,
        subtitle: isSubtitle,
      })}
    >
      {children}
    </div>
  );
}

Title.defaultProps = {
  type: 'title',
};

export default Title;
