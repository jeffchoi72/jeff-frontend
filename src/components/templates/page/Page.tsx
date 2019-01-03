import * as React from 'react';
import styled from 'styled-components';

import Header from 'src/components/organisms/header';
import * as responsiveSize from 'src/styles/responsive';

interface Props {
  children: React.ReactNode;
}

const Page:React.SFC<Props> = ({ children }) => {
  const Wrap = styled.div`
    /* display: flex; */
  `;

  const Main = styled.div`
    width: ${responsiveSize.xLarge};
    margin: 20px auto;

    @media only screen and (max-width: ${responsiveSize.large}) {
      width: 800px;
    }

    @media only screen and (max-width: ${responsiveSize.medium}) {
      width: 600px;
    }

    @media only screen and (max-width: ${responsiveSize.small}) {
      width: 500px;
    }

    @media only screen and (max-width: ${responsiveSize.xSmall}) {
      width: 100%;
      margin: 20px 0;
    }
  `;

  return (
    <Wrap>
      <Header />
      <Main>
        { children }
      </Main>
    </Wrap>
  );
};

export default Page;
