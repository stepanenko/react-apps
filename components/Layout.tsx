
import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import Head from "next/head";
import CSS from "csstype";

type LayoutProps = {
  title?: string;
};

const paperStyle: CSS.Properties = {
  padding: "30",
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="ttps://github.com/stepanenko/">
        Stepanenko GitHub
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/courses">
            <Button color="inherit">Courses</Button>
          </Link>
          <Link href="/about">
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Paper square elevation={3}>
        {children}
        <Copyright />
      </Paper>
    </Container>
  </div>
);

export default Layout;
