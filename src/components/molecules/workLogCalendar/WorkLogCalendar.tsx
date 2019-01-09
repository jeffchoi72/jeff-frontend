import * as React from 'react';
import styled from 'styled-components';

import Calendar from 'src/components/atom/calendar';
import Title from 'src/components/atom/title';
import { WorkHistories } from 'src/store/modules/work';

interface Props {
  workHistories: WorkHistories,
}

const WorkLogCalendar: React.SFC<Props> = ({ workHistories }) => {
  const CalendarWrap = styled.div`
    margin-top: 50px;
    margin-bottom: 30px;
  `;

  return (
    <div>
      <Title text="2018년 12월에 기록한 영훈님의 업무시간 입니다"/>
      <CalendarWrap>
        <Calendar data={workHistories.data} />
      </CalendarWrap>
    </div>
  );
};

export default WorkLogCalendar;
