
import { NextPage } from "next";
import Layout from "../components/Layout";
import CSS from "csstype";

const agentStyle: CSS.Properties = {
  color: "green",
  fontSize: "34px",
  padding: "30px",
};

const About: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1>ABOUT YOUR USER AGENT:</h1>
    <p style={agentStyle}>{userAgent}</p>
  </Layout>
);

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default About;
