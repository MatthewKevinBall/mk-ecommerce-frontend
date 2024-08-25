import React from 'react';


interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children , ...rest}) => {

    return (
       <button onClick={onClick} {...rest}>
          {children}
        </button>
      );
}

export default Button;