import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#F8F8FA', '#252735')(props),
      color: mode('#181818', '#FFFFFF')(props)
    }
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '60em',
  xl: '75em',
  '2xl': '90em'
});

const theme = extendTheme({ config, styles, breakpoints });
export default theme;
