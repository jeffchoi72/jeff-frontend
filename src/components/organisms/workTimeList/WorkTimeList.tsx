import * as React from 'react';
import styled from 'styled-components';

import WorkTime from 'src/components/molecules/workTime';
import { DetailWorkHistory } from 'src/store/modules/work';

interface Props {
  detailWorkHistories: DetailWorkHistory[];
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WorkTimeList: React.SFC<Props> = ({ detailWorkHistories }) => {
  const renderToWorkTimeList = () => {
    return detailWorkHistories.map((detailWorkHistory, idx) => {
      const { time, isWork } = detailWorkHistory;
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
