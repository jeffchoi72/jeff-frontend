import * as moment from 'moment';
import * as React from 'react';
import WorkTimeList from 'src/components/organisms/workTimeList';
import { DetailWorkHistory } from 'src/store/modules/work';
import styled from 'styled-components';

interface Props {
  selectedDate: Date;
  detailWorkHistories: {
    allWorkTime: number;
    detailWorkHistories: DetailWorkHistory[];
  };
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
  margin-top: 50px;
`;

const StartTime = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const WorkLogDetail: React.SFC<Props> = ({ selectedDate, detailWorkHistories: { allWorkTime, detailWorkHistories } }) => {
  const renderStartTime = () => {
    const timeList = detailWorkHistories.filter(detailWorkHistory => detailWorkHistory.isWork === true);
    if (timeList.length === 0) {
      return <StartTime>[시작시간] 없음</StartTime>
    } else {
      return <StartTime>[시작시간] {timeList[0].time}시</StartTime>
    }
  };

  return (
    <Wrap>
      <Header>
        <HeaderContent>{moment(selectedDate).format('YYYY-MM-DD')}은 총 {allWorkTime}시간 일했습니다</HeaderContent>
      </Header>
      <Content>
        {/* <StartTime>[START] 10.00 AM</StartTime> */}
        {renderStartTime()}
        <WorkTimeList detailWorkHistories={detailWorkHistories} />
      </Content>
    </Wrap>
  );
};

export default WorkLogDetail;
