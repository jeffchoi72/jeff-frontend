import * as React from 'react';
import { connect } from 'react-redux';

import WorkLogCalendar from 'src/components/molecules/workLogCalendar';
import { requestWorkHistoriesByMonth, WorkHistories } from 'src/store/modules/work';

interface Props {
  workHistories: WorkHistories;
  requestWorkHistoriesByMonth: () => {};
}

class WorkHistoryContainer extends React.Component<Props, {}> {
  public componentDidMount() {
    console.log('componentDidMount');
    this.props.requestWorkHistoriesByMonth();
  }

  public render() {
    console.log(this.props.workHistories);
    return (
      <React.Fragment>
        <WorkLogCalendar workHistories={this.props.workHistories} />
      </React.Fragment>
    );
  };
};

const mapStateToProps = ({ work }: any) => {
  const { workHistories } = work;
  return {
    workHistories,
  };
};

const mapDispatchToProps = {
  requestWorkHistoriesByMonth,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistoryContainer);
