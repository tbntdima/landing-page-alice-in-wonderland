import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: ${props => props.zIndex};
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default BackgroundWrapper;
