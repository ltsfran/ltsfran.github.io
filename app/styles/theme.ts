import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    bg: mode('#F8F8FA', '#252735')(props)
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

/*
const lightTheme = {
  backgroundColor: '#F8F8FA',
  colorText: '#181818'
};

const darkTheme = {
  backgroundColor: '#252735',
  colorText: '#FFFFFF'
}
*/

const theme = extendTheme({ config, styles })
export default theme
