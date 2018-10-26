import React from 'react';
import { Button as Base } from 'rebass';


function Button(props) {
    return (
        <Base
            bg="#546de5"
            css={{
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#4157be',
                }
            }}
            {...props}
        />
    );
}


export default Button;
