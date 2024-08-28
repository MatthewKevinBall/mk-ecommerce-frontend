import React from 'react';
import Layout from '../components/Layout';
import EditProfile from '../components/Forms/EditProfile';

const MyAccount: React.FC = () => {
  const updateDetails = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Layout>
        <h1>My Account</h1>
        <EditProfile />
      </Layout>
    </React.Fragment>
  );
};

export default MyAccount;
