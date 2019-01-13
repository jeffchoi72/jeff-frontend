import * as React from 'react';
import { Helmet } from "react-helmet";

import Page from 'src/components/templates/page';
import WorkHistoryContainer from 'src/container/WorkHistoryContainer';

const WorkHistory: React.SFC<{}> = () => {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff - My Work Log</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <WorkHistoryContainer />
    </Page>
  );
}

export default WorkHistory;
