import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
const Landing: React.FC = () => {
    return (
       <Layout>
            <div>
            <h1>Welcome to Our App</h1>
            <p>This is the landing page.</p>
        </div>
      </Layout>
    );
  };

export default Landing;