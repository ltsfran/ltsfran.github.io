import NextLink from 'next/link';
import {
  Container,
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import LogoIcon from '@app/icons/logo.svg';
import Sun from '@app/icons/sun.svg';
import Moon from '@app/icons/moon.svg';
import Hamburger from '@app/icons/hamburger.svg';

const SunIcon: React.FC = () => (
  <ClassNames>
    {({ css }) =>
      <Sun className={css`
        font-size: 1.5rem;
      `} />}
  </ClassNames>
);

const MoonIcon: React.FC = () => (
  <ClassNames>
    {({ css }) =>
      <Moon className={css`
        font-size: 1.5rem;
      `} />}
  </ClassNames>
);

const HamburgerIcon: React.FC = () => (
  <ClassNames>
    {({ css }) =>
      <Hamburger className={css`
        font-size: 1.5rem;
      `} />}
  </ClassNames>
);

const Header: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      w="100%"
      bg={useColorModeValue('#ECECF1', '#252735')}>
      <Container
        as="nav"
        maxW="1200px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        py={2.5}
        px={{ base: 4, md: 6 }}>
        <NextLink href="/">
          <a>
            <ClassNames>
              {({ css }) =>
                <LogoIcon className={css`
                  font-size: 2rem;
                `} />}
            </ClassNames>
          </a>
        </NextLink>
        <HStack
          display={{ base: 'none', md: 'flex' }}
          spacing={2}
          width="auto"
          flexGrow={1}
          justify="flex-end"
          mr={4}>
          <NextLink href="/" passHref>
            <Link p={2}>Home</Link>
          </NextLink>
          <NextLink href="/works" passHref>
            <Link p={2}>Works</Link>
          </NextLink>
          <NextLink href="https://github.com/ltsfran/ltsfran.github.io" passHref>
            <Link p={2} target="_blank">View Source</Link>
          </NextLink>
        </HStack>
        <HStack spacing={2} align="right">
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode} />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options" />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/ltsfran/ltsfran.github.io" passHref>
                  <MenuItem as={Link}>View Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
