import * as React from 'react';
import { Helmet } from "react-helmet";

import Page from 'src/components/templates/page';

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <Page>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff - Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h2>Home Page</h2>
      </Page>
    );
  };
};

export default Home;
