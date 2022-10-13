import { useRef, useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaUnlock } from 'react-icons/fa';
import router from 'next/router';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '123');
    router.push('/home');

    // setLoading(true);

    // AuthService.login(emailRef.current?.value, passwordRef.current?.value).then(
    //   () => {
    //     router.push('/home');
    //     window.location.reload();
    //   },
    //   (error) => {
    //     setLoading(false);
    //     console.log(error);
    //   },
    // );
    // setLoading(false);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Bem Vindo!</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input ref={emailRef} type="email" placeholder="Email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    ref={passwordRef}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Esqueceu a senha?</Link>
                </FormHelperText>
              </FormControl>
              {loading && <span className="spinner-border spinner-border-sm"></span>}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleLogin}
                disabled={loading}
                leftIcon={<FaUnlock />}
              >
                Entrar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Ainda não tem uma conta?{' '}
        <Link color="teal.500" href="#">
          Cadastrar
        </Link>
      </Box>
    </Flex>
  );
};

export default LoginPage;
