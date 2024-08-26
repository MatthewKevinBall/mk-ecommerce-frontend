import React from 'react';


interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', children ,}) => {

    return (
       <button onClick={onClick} type={type}>
          {children}
        </button>
      );
}

export default Button;