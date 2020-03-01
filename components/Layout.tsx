
import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  title?: string
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const linkStyle = {
  marginRight: 20
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/agent">
          <a style={linkStyle}>Agent</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
