import * as React from 'react';
import styled from 'styled-components';

import WorkTime from 'src/components/molecules/workTime';

// const mockList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const mockList = [
  {
    time: '01',
    isWork: false,
  },
  {
    time: '02',
    isWork: false,
  },
  {
    time: '03',
    isWork: false,
  },
  {
    time: '04',
    isWork: false,
  },
  {
    time: '05',
    isWork: false,
  },
  {
    time: '06',
    isWork: false,
  },
  {
    time: '07',
    isWork: false,
  },
  {
    time: '08',
    isWork: false,
  },
  {
    time: '09',
    isWork: false,
  },
  {
    time: '10',
    isWork: true,
  },
  {
    time: '11',
    isWork: true,
  },
  {
    time: '12',
    isWork: true,
  },
  {
    time: '13',
    isWork: true,
  },
  {
    time: '14',
    isWork: false,
  },
  {
    time: '15',
    isWork: true,
  },
  {
    time: '16',
    isWork: true,
  },
  {
    time: '17',
    isWork: true,
  },
  {
    time: '18',
    isWork: true,
  },
  {
    time: '19',
    isWork: false,
  },
  {
    time: '20',
    isWork: false,
  },
  {
    time: '21',
    isWork: false,
  },
  {
    time: '22',
    isWork: false,
  },
  {
    time: '23',
    isWork: false,
  },
]

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkTimeList = () => {
  const renderToWorkTimeList = () => {
    return mockList.map((moc, idx) => {
      const { time, isWork } = moc;
      return (
        <WorkTime key={idx} time={time} isWork={isWork} />
      );
    })
  };

  return (
    <Wrap>
      {renderToWorkTimeList()}
    </Wrap>
  );
};

export default WorkTimeList;
