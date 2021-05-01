
import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

import Layout from "../components/Layout";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <h1>HOME PAGE</h1>
      <Link href="/blog/page">
        <Button variant="contained" color="primary">
          OPEN BLOG
        </Button>
      </Link>
    </Layout>
  );
};

export default Index;
