import 'styled-components'

export type ModeTheme = {
  backgroundColor: string;
  colorText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ModeTheme {}
}
