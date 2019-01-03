import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo: React.SFC<{}> = () => {
  const LogoComponent = styled.span`
    font-size: 24px;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 5px;
  `;

  return (
    <LogoComponent>
      <Link to="/">Lify</Link>
    </LogoComponent>
  );
};

export default Logo;
