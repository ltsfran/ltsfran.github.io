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

const components = {
  Button: {
    variants: {
      'filled': props => ({
        bg: '#626ED4',
        color: mode('#FFFFFF', '#181818')(props)
      })
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '35em',
  md: '48em',
  lg: '60em',
  xl: '75em',
  '2xl': '90em'
});

const theme = extendTheme({ components, config, styles, breakpoints });
export default theme;
