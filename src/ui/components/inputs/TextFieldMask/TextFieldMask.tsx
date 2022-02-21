import { OutlinedTextFieldProps } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '../TextField/TextField';
// import { } from '@mui/material';
// import { Component } from './TextFieldMask.style';

export interface TextFieldMaskProps extends Omit<OutlinedTextFieldProps, 'variant'> {
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
    mask,
    value,
    onChange,
    onBlur,
    ...props
}) => {
    return (
        <InputMask mask={mask} value={value as string} onChange={onChange} onBlur={onBlur}>
            {() => {
                return <TextField{...props} variant={'outlined'}/> 
            }}
        </InputMask>
    );
};

export default TextFieldMask;