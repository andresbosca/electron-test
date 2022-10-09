import { useCallback, useRef } from 'react';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import Input from '../components/InputCard/Input/Input';
import InputCard from '../components/InputCard/InputCard';

const loginPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);
  }, []);

  return (
    <InputCard>
      <FaArrowAltCircleRight />
      <Input ref={emailRef} type={'email'} placeholder="Enter your login" />
      <Input ref={passwordRef} type={'password'} placeholder="Enter your password" />
      <button onClick={() => handleLogin}>
        <FaArrowRight />
      </button>
    </InputCard>
  );
};

export default loginPage;
