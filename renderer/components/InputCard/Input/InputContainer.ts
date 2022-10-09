import styled from 'styled-components';
interface InputContainerProps {
  gridStart: number;
  gridEnd: number;
}

const InputContainer = styled.input<InputContainerProps>`
  grid-column: 3/ 9;

  margin: 4px;
  padding: 3px;

  border-radius: 6px;
`;

export default InputContainer;
