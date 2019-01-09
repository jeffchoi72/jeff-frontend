import * as React from 'react';

import Page from 'src/components/templates/page';
import WorkHistoryContainer from 'src/container/WorkHistoryContainer';

const WorkHistory: React.SFC<{}> = () => {
  return (
    <Page>
      <WorkHistoryContainer />
    </Page>
  );
};

export default WorkHistory;
