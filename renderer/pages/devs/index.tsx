import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SidebarWithHeader from '../../components/SideBar';

const Devs: React.FC = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="4xl" fontWeight="bold" mb={5}>
        Devs
      </Text>
      <Flex>
        <Container>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Text ml={2}>Andres Boscaini</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link href="https://github.com/andresbosca" isExternal color="blue.500">
              <Flex alignItems="center">
                <FaGithub />
                <Text ml={2}>Github</Text>
              </Flex>
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link
              href="https://br.linkedin.com/in/andres-boscaini-692310247/pt"
              isExternal
              color="blue.500"
            >
              <Flex alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Flex>
            </Link>
          </Text>
        </Container>
        <Container>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Text ml={2}>Andrey Schneider</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link href="https://github.com/AndreyASchneider" isExternal color="blue.500">
              <Flex alignItems="center">
                <FaGithub />
                <Text ml={2}>Github</Text>
              </Flex>
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link
              href="https://br.linkedin.com/in/andrey-schneider?trk=people-guest_people_search-card"
              isExternal
              color="blue.500"
            >
              <Flex alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Flex>
            </Link>
          </Text>
        </Container>
        <Container>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Text ml={2}>Gabriela Biasi</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link href="https://github.com/gabrielabiasi" isExternal color="blue.500">
              <Flex alignItems="center">
                <FaGithub />
                <Text ml={2}>Github</Text>
              </Flex>
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link
              href="https://br.linkedin.com/in/gabriela-biasi?trk=people-guest_people_search-card"
              isExternal
              color="blue.500"
            >
              <Flex alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Flex>
            </Link>
          </Text>
        </Container>
        <Container>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Text ml={2}>Bernardo Schneider</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link href="https://github.com/bernardoschneider" isExternal color="blue.500">
              <Flex alignItems="center">
                <FaGithub />
                <Text ml={2}>Github</Text>
              </Flex>
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>
            <Link
              href="https://br.linkedin.com/in/bernardo-schneider?trk=people-guest_people_search-card"
              isExternal
              color="blue.500"
            >
              <Flex alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Flex>
            </Link>
          </Text>
        </Container>
      </Flex>
    </SidebarWithHeader>
  );
};

export default Devs;
