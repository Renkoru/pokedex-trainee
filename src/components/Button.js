import React from 'react';


function buttonComponent({ title, onClick }) {
    return React.createElement(
        'button',
        {
            onClick,
        },
        title,
    );
}

export default buttonComponent;
