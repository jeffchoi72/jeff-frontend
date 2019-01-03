import * as React from 'react';
import styled from 'styled-components';

import HorizontalBar from 'src/components/atom/horizontalBar';
import Title from 'src/components/atom/title';

const WorkLogChart: React.SFC<{}> = () => {
  const HorizontalBarWrap = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
  `;

  return (
    <div>
      <Title text="일주일동안 기록한 영훈님의 업무시간 입니다"/>
      <HorizontalBarWrap>
        <HorizontalBar />
      </HorizontalBarWrap>
    </div>
  );
};

export default WorkLogChart;
