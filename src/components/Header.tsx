import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { logout } from '../redux/actions/loginActions';
import { clearUser } from '../redux/actions/userActions';
import { useHandleLogout } from '../utils/forms/authHelpers';

const Header: React.FC = () => {
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
  const handleLogout = useHandleLogout();

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <a href='/'>Home</a>
        </div>
        {loggedIn ? (
          <React.Fragment>
            <div className='row'>
              <a href='/my-account'>Account</a>
            </div>
            <div className='row'>
              <a onClick={handleLogout}>Logout</a>
            </div>
          </React.Fragment>
        ) : (
          <div className='row'>
            <a href='/login'>Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
