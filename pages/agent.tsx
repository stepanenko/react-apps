
import { NextPage } from 'next';
import Layout from '../components/Layout';

const agentStyle = {
  color: 'green',
  fontSize: 24
};

const Agent: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1>Your User Agent:</h1>
    <p style={agentStyle}>{userAgent}</p>
  </Layout>
);

Agent.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Agent;
