import React from "react";
import InputMask from 'react-input-mask'
import TextField from 'ui/styles/components/inputs/TextField/TextField';
import { OutlinedInputProps } from "@mui/material";


export interface TextFieldMaskProps extends OutlinedInputProps {
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
    return (
        <InputMask mask={mask}>
            {() => {
                return <TextField {...props} />;
            }}
        </InputMask>
    );
};

export default TextFieldMask;