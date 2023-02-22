import { theme } from './../styles/themes/default'
import 'styled-components'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
