import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const Title: React.SFC<Props> = ({ text }) => {
  const TitleStyled = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: #1F2124;
  `;

  return (
    <TitleStyled>
      { text }
    </TitleStyled>
  );
};

export default Title;
