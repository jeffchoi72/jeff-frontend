import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';

import WorkLogCalendar from 'src/components/organisms/workLogCalendar';
import { WorkHistoriesByDayParam, WorkHistoriesByMonthParam } from 'src/lib/api/work';
import { DetailWorkHistories, requestWorkHistoriesByDay, requestWorkHistoriesByMonth, WorkHistories } from 'src/store/modules/work';

interface Props {
  workHistories: WorkHistories;
  detailWorkHistories: DetailWorkHistories;
  requestWorkHistoriesByMonth: ({ month }: WorkHistoriesByMonthParam) => {};
  requestWorkHistoriesByDay: ({ month }: WorkHistoriesByDayParam) => {};
};

interface State {
  selectedMonth: any;
  selectedDate: Date;
};

class WorkHistoryContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state  = { selectedMonth: moment().format('YYYY-MM'), selectedDate: new Date() };
  }

  public componentDidMount() {
    this.requestSelectedMonth();
    this.requestSelectedDay();
  }

  public moveToNextMonth = async () => {
    const { selectedMonth } = this.state;
    await this.setState({
      selectedMonth: moment(selectedMonth).add('1', 'M').format('YYYY-MM')
    });

    this.requestSelectedMonth();
  }

  public moveToPrevMonth = async () => {
    const { selectedMonth } = this.state;
    await this.setState({
      selectedMonth: moment(selectedMonth).add('-1', 'M').format('YYYY-MM')
    });

    this.requestSelectedMonth();
  }

  public handleChangeSelectedDay = async (selectedDate: Date) => {
    await this.setState({ selectedDate });
    this.requestSelectedDay();
  }

  public requestSelectedMonth = () => {
    const { selectedMonth } = this.state;

    this.props.requestWorkHistoriesByMonth({ month: selectedMonth });
  }

  public requestSelectedDay = () => {
    const { selectedMonth, selectedDate } = this.state;
    this.props.requestWorkHistoriesByDay({ month: selectedMonth, day: moment(selectedDate).format('DD')});
  }

  public render() {
    return (
      <React.Fragment>
        <WorkLogCalendar
          workHistories={this.props.workHistories}
          selectMonth={this.state.selectedMonth}
          moveToNextMonth={this.moveToNextMonth}
          moveToPrevMonth={this.moveToPrevMonth}
          selectedDate={this.state.selectedDate}
          handleChangeSelectedDay={this.handleChangeSelectedDay}
          detailWorkHistories={this.props.detailWorkHistories.data}
        />
      </React.Fragment>
    );
  }};

const mapStateToProps = ({ work }: any) => {
  const { workHistories, detailWorkHistories } = work;
  return {
    workHistories,
    detailWorkHistories,
  };
};

const mapDispatchToProps = {
  requestWorkHistoriesByMonth,
  requestWorkHistoriesByDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistoryContainer);
