import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/wonderland-logo.png';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111530;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadingInOut = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: .55;
    }
    100% {
      opacity: 1;
    }
`;

const FadingBlock = styled.div`
  width: 320px;
  animation: ${fadingInOut} 3s linear infinite;
`;

const Loadingpage = () => {
  return (
    <Wrapper>
      <FadingBlock>
        <img src={logo} alt="logo" />
      </FadingBlock>
    </Wrapper>
  );
};

export default Loadingpage;
