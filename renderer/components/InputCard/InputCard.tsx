import React from 'react';
import InputCardContainer from './InputCardContainer';

interface InputCardProps {
  children: React.ReactNode;
}

const InputCard: React.FC<InputCardProps> = ({ children }) => {
  return <InputCardContainer>{children}</InputCardContainer>;
};

export default InputCard;
