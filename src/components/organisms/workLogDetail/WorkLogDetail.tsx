import * as moment from 'moment';
import * as React from 'react';
import WorkTimeList from 'src/components/organisms/workTimeList';
import styled from 'styled-components';

interface Props {
  selectedDate: Date;
}

const Wrap = styled.div`
  text-align: left;
  /* width: 909px; */
  /* margin: 0 auto; */
`;

const Header = styled.div`
  margin-top: 100px;
`;

const HeaderContent = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #1F2124;
`;

const Content = styled.div`
  margin-top: 100px;
`;

const StartTime = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const WorkLogDetail: React.SFC<Props> = ({ selectedDate }) => {
  return (
    <Wrap>
      <Header>
        <HeaderContent>{moment(selectedDate).format('YYYY-MM-DD')}은 총 10시간 일했습니다</HeaderContent>
      </Header>
      <Content>
        <StartTime>[START] 10.00 AM</StartTime>
        <WorkTimeList />
      </Content>
    </Wrap>
  );
};

export default WorkLogDetail;
