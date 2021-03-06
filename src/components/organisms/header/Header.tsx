import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Logo from 'src/components/atom/logo';
import * as Responsive from '../../../styles/responsive';

const Header: React.SFC<{}> = () => {
  const HeaderWrap = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  const HeaderContent = styled.div`
    width: 1400px;
    margin: 0 auto;

    @media only screen and (max-width: 1480px) {
      width: 1280px;
    }

    @media only screen and (max-width: 1360px) {
      width: 1020px;
    }

    @media only screen and (max-width: ${Responsive.large}) {
      width: 800px;
    }

    @media only screen and (max-width: ${Responsive.medium}) {
      width: 600px;
    }

    @media only screen and (max-width: ${Responsive.small}) {
      width: 500px;
    }

    @media only screen and (max-width: ${Responsive.xSmall}) {
      width: 100%;
    }
  `;

  const NavWrap = styled.div`
      margin-top: 30px;
      font-size: 18px;
  `;

  return (
    <HeaderWrap>
      <HeaderContent>
        <Logo />
        <NavWrap>
          <Link to="/work/history">내 업무시간 보기</Link>
        </NavWrap>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
