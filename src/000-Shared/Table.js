import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Table({ children, head }) {
  return (
    <table className="table is-hoverable is-fullwidth is-bordered">
      {head && (
        <thead>
          <tr>
            {head.map((columnName, index) => (
              <th key={index}> {columnName} </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </table>
  );
}

Table.Tr = function Tr({ children, selected = false }) {
  return (
    <tr className={classNames({ 'is-selected': selected })}>
      {children}
    </tr>
  );
};

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
