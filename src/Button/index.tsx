import React from 'react';

export interface ButtonProps {
    label: string;
}

const Button = ({ label }:ButtonProps): React.ReactElement => (
    <button>{label}</button>
)

export default Button;