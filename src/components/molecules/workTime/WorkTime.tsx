import * as React from 'react';
import styled from 'styled-components';

import Square from 'src/components/atom/square';

const Wrap = styled.div`
  text-align: center;
  margin: 0 5px;
`;

interface Props {
  time: string;
  isWork: boolean;
}

const WorkTime: React.SFC<Props> = ({ time, isWork }) => {
  const Time = styled.span`
    display: block;
    margin-bottom: 10px;
    color: ${isWork ? '#282c37' : '#dddfe6'};
    font-weight: 800;
  `;

  return (
    <Wrap>
      <Time>{time}</Time>
      <Square color={isWork ? '#4F86C6' : '#dddfe6'} />
    </Wrap>
  );
};

export default WorkTime;
