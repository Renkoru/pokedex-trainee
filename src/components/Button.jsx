import React from 'react';


function Button({ title, onClick, style }) {

    return <button
               style={{
                   backgroundColor: '#b3d4ff',
                   borderColor: '#77b2ff',
                   borderRadius: '5px',
                   padding: '3px 7px',
                   ...style,
               }}
               onClick={onClick}
           >
               {title}
           </button>;
}

export default Button;
