import * as dateFns from "date-fns";
import * as React from 'react';

import { WorkHistory } from "src/store/modules/work";

import "./Calendar.scss";

interface Props {
  data: WorkHistory[];
}

interface State {
  currentMonth: Date;
  selectedDate: Date;
}

class Calendar extends React.Component<Props, State> {
  public state: State = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  public renderHeader() {
    const dateFormat = "YYYY-MM";

    return (
      <div className="header header-row">
        <div className="header-col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="header-col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="header-col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };

  public renderDays() {
    const dateFormat = "dddd";
    const days = [];
    const startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  public renderCells() {
    const { currentMonth, selectedDate } = this.state;

    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        const hasWorkTime = this.hasWorkTime(day);

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={i}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.onDateClick(cloneDay) }
          >
            <span className="number">{formattedDate}</span>
            { hasWorkTime !== -1 ? <span className="work-time">{this.props.data[hasWorkTime].workTime}시간</span> : '' }
          </div>
        );
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }

  public hasWorkTime = (day: Date) => {
    const formattedDate = dateFns.format(day, 'YYYY-MM-DD');
    return this.props.data.findIndex((index) => index.workDate === formattedDate);
  }

  public onDateClick = (day: Date) => {
    this.setState({ selectedDate: day });
  };

  public nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  public prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  public render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  };
};

export default Calendar;

