import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { email } = useSelector((state: RootState) => state.user);
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'>
            {loggedIn ? (
              <p>Currently Logged in as: {email}</p>
            ) : (
              <p>
                Please <a href='/login'>Login</a> or{' '}
                <a href='/register'>Register</a>
              </p>
            )}
          </div>
          <div className='col-3'></div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <Header />
          </div>
          <div className='col-6'>
            <main>{children}</main>
          </div>
          <div className='col-3'></div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
};
export default Layout;
