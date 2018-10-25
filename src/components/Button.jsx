import React from 'react';


function buttonComponent({ title, onClick }) {

    return <button onClick={onClick}>{title}</button>;
}

export default buttonComponent;
