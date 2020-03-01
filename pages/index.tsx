
import React from 'react';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <h1>NextJS + TypeScript + Material-UI</h1>
      <Button variant="contained" color="primary">
        Hello NEXTJS
      </Button>
    </Layout>
  );
};

export default Index;
