import React from 'react';


interface InputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;    
  }

const Button: React.FC<InputProps> = ({ type, placeholder, value, onChange}) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
      );
}

export default Button;