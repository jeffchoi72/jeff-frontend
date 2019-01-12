import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Title: React.SFC<Props> = ({ children }) => {
  const TitleStyled = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #1F2124;
  `;

  return (
    <TitleStyled>
      { children }
    </TitleStyled>
  );
};

export default Title;
