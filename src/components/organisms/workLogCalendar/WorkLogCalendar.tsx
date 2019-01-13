import * as React from 'react';
import styled from 'styled-components';

import Title from 'src/components/atom/title';
import Calendar from 'src/components/lib/calendar';
import WorkLogDetail from 'src/components/organisms/workLogDetail';
import { WorkHistories } from 'src/store/modules/work';

interface Props {
  workHistories: WorkHistories,
  selectMonth: string,
  moveToNextMonth: () => void;
  moveToPrevMonth: () => void;
  selectedDate: Date;
  handleChangeSelectedDay: (selectedDay: Date) => void;
};

const WorkLogCalendar: React.SFC<Props> = ({
  workHistories,
  selectMonth,
  moveToNextMonth,
  moveToPrevMonth,
  selectedDate,
  handleChangeSelectedDay,
}) => {
  const CalendarWrap = styled.div`
    margin-top: 50px;
    margin-bottom: 30px;
  `;

  const WorkLogDetailWrap = styled.div`
    margin-bottom: 50px;
  `;

  return (
    <div>
      <Title>
        <span>{selectMonth}에 기록한 영훈님의 업무시간 입니다</span>
      </Title>
      <CalendarWrap>
        <Calendar
          data={workHistories.data}
          selectMonth={selectMonth}
          moveToNextMonth={moveToNextMonth}
          moveToPrevMonth={moveToPrevMonth}
          selectedDate={selectedDate}
          handleChangeSelectedDay={handleChangeSelectedDay}
        />
      </CalendarWrap>
      <WorkLogDetailWrap>
        <WorkLogDetail selectedDate={selectedDate} />
      </WorkLogDetailWrap>
    </div>
  );
};

export default WorkLogCalendar;
