import styled from 'styled-components';
import ChangeBackgroundColor from './ChangeBackgroundColor';

const Filter = styled.div`
  height: 100%;
  width: 100%;
  opacity: ${props => props.opacity};
  animation: ${props => ChangeBackgroundColor}
    ${props => props.animationDuration}s linear infinite;
`;

export default Filter;
