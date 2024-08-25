import React from 'react';
import Header from './Header';
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
      <div>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Header />
              </div>
              <div className="col-6">
                <main>{children}</main>
              </div>
              <div className="col-3">
              </div>
            </div>
            <footer></footer>
          </div>
      </div>
    );
  };
export default Layout;