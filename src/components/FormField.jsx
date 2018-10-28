import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { Flex } from '../components';


const Input = styled.input`
    ${space}
`;


function FormField({ name, value, label, onChange, type="text", ...rest}) {
    return (
        <Flex my={10} {...rest}>
            <label>{label}</label>
            <Input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                ml="auto"
                {...rest}
            />
        </Flex>
    );
}


export default FormField;
