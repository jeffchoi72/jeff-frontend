import * as React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
};

const Square: React.SFC<Props> = ({ color }) => {
  const Wrap = styled.div`
    width: 30px;
    height: 100px;
    background-color: ${color};
    border-radius: 3px;
  `;

  return (
    <Wrap />
  );
};

export default Square;
