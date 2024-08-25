import React from 'react';

const Header: React.FC = () => {
    return (
      <div>
        <div className="container">
            <div className="row">
                    <a href="/">Home</a>
            </div>
            <div className ="row">
                <a href="/login">Login</a>
            </div>
        </div>
    </div>
    );
}

export default Header;