import { Box, BoxProps, CloseButton, Flex, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiPlusCircle, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';
import NavItem from './NavItem';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/home' },
  { name: 'Cadastrar imovel', icon: FiPlusCircle, href: '/newProperty' },
  // { name: 'Trending', icon: FiTrendingUp, href: '/home' },
  // { name: 'Explore', icon: FiCompass, href: '/home' },
  // { name: 'Favourites', icon: FiStar, href: '/home' },
  // { name: 'Settings', icon: FiSettings, href: '/home' },
  { name: 'Logout', icon: FiSettings, href: '/login' },
];

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map(({ name, icon, href }) => (
        <NavItem key={name} icon={icon} href={href}>
          {name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
