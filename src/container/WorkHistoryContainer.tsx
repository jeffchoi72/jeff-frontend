import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';

import WorkLogCalendar from 'src/components/molecules/workLogCalendar';
import { WorkHistoriesByMonthParam } from 'src/lib/api/work';
import { requestWorkHistoriesByMonth, WorkHistories } from 'src/store/modules/work';

interface Props {
  workHistories: WorkHistories;
  requestWorkHistoriesByMonth: ({ month }: WorkHistoriesByMonthParam) => {};
};

interface State {
  selectedMonth: any;
};

class WorkHistoryContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state  = { selectedMonth: moment().format('YYYY-MM') }
  }

  public componentDidMount() {
    console.log('componentDidMount');
    this.props.requestWorkHistoriesByMonth({ month: this.state.selectedMonth });
  }

  public moveToNextMonth = async () => {
    const { selectedMonth } = this.state;
    await this.setState({
      selectedMonth: moment(selectedMonth).add('1', 'M').format('YYYY-MM')
    });

    this.props.requestWorkHistoriesByMonth({ month: this.state.selectedMonth });
  }

  public moveToPrevMonth = async () => {
    const { selectedMonth } = this.state;
    await this.setState({
      selectedMonth: moment(selectedMonth).add('-1', 'M').format('YYYY-MM')
    });

    this.props.requestWorkHistoriesByMonth({ month: this.state.selectedMonth });
  }

  public render() {
    return (
      <React.Fragment>
        <WorkLogCalendar
          workHistories={this.props.workHistories}
          selectMonth={this.state.selectedMonth}
          moveToNextMonth={this.moveToNextMonth}
          moveToPrevMonth={this.moveToPrevMonth}
        />
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
