import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: ${props => props.zIndex};
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default BackgroundWrapper;
