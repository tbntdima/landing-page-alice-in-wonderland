import { keyframes } from 'styled-components';

const ChangeBackgroundColor = ({ colors }) => {
  const shaderSlice = 100 / colors.length;
  return keyframes`
       ${colors.map(
         (color, index) => index * shaderSlice + '% {background: ' + color + '}'
       )};
       100% {
         background: ${colors[0]}
       }
    `;
};

export default ChangeBackgroundColor;
