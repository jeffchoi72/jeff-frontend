import * as React from 'react';

import WorkLogCalendar from 'src/components/molecules/workLogCalendar';
import Page from 'src/components/templates/page';

const WorkHistory: React.SFC<{}> = () => {
  return (
    <Page>
      <WorkLogCalendar />
    </Page>
  );
};

export default WorkHistory;
