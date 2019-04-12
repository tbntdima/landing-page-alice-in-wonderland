import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #111530;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinKeyframes = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinningBlock = styled.div`
  width: 320px;
  transform: rotate(0deg);
  animation: ${spinKeyframes} 3s linear infinite;
`;

const Loadingpage = () => {
  return (
    <Wrapper>
      <SpinningBlock>
        <Logo />
      </SpinningBlock>
    </Wrapper>
  );
};

export default Loadingpage;
