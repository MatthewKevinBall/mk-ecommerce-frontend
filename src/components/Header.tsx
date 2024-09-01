import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useHandleLogout } from '../utils/forms/authHelpers';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
  const isAdmin = useSelector((state: RootState) => state.user.userType) === 'Admin'
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = useHandleLogout();

  const getAdminOptions = () =>{
    if(!isAdmin){ return true}
    return (
    <React.Fragment>
      <div className='row'>
        <a href='/admin'>Admin</a>
      </div>
    </React.Fragment>
    )
  }
  const loggedInOptions = () => {
    return (
      <React.Fragment>
        <div className='row'>
          <a href='/my-account'>Account</a>
        </div>
        {getAdminOptions()}
        <div className='row'>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </React.Fragment>
    )
  }

  const getSubmenuOptions = () => {
      if (currentPath.includes('/my-account')) {
      return getMyAccountSubmenus();
    }
  
    if (currentPath.includes('/admin')) {
      return getAdminSubmenus();
    }

    return null;
  
  }

  const getAdminSubmenus = () => {
    return (
      <React.Fragment>
         <div className='row'>
              <a href='/admin'>Admin Dashboard</a>
              <a href='/admin'>Create User</a>
            </div>
      </React.Fragment>
    );
  };
  
  const getMyAccountSubmenus = () => {
    return (
      <React.Fragment>
         <div className='row'>
            <a href='/my-account'>Account Dashboard</a>
            <a href='/my-account'>Update Details</a>
            <a href='/my-account/reset-password'>Reset Password</a>
          </div>
      </React.Fragment>
    );
  };
  

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <a href='/'>Home</a>
            {loggedIn ? (
                loggedInOptions()
              ) : (
                <div className='row'>
                  <a href='/login'>Login</a>
                </div>
            )}
          </div>
          <div className='col-6'>
            {getSubmenuOptions()}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;