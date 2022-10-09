import { HTMLInputTypeAttribute } from 'react';
import InputContainer from './InputContainer';

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ ref, type, placeholder }) => {
  return (
    <InputContainer gridEnd={3} gridStart={8} ref={ref} type={type} placeholder={placeholder} />
  );
};

export default Input;
