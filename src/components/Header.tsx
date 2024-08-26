import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { logout } from '../redux/actions';


const Header: React.FC = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
    const dispatch = useDispatch<AppDispatch>();
    
    const handleLogout = () => {
        // Handle login logic here
       dispatch(logout());
    };

    return (
      <div>
        <div className="container">          
            <div className="row">
                    <a href="/">Home</a>
            </div>
            <div className ="row">
                <a href="/login">Login</a>
            </div>
            {loggedIn && (
                <div className ="row">
                    <a onClick={handleLogout}>Logout</a>
                </div>)
            }
        </div>
    </div>
    );
}

export default Header;