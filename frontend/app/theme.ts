import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { GRAY, PRIMARY, DANGER, WARNING, SUCCESS, NEUTRAL, CHROME } from 'lib/colors';

const AppTheme: {} = () => ({
  ...DEFAULT_THEME,
  borderRadii: {
    ...DEFAULT_THEME.borderRadii,
    lg: '16px',
  },
  fonts: {
    ...DEFAULT_THEME.fonts,
    system: 'Barlow',
  },
  colors: {
    ...DEFAULT_THEME.colors,
    foreground: GRAY[900],
    primaryHue: PRIMARY,
    dangerHue:  DANGER,
    warningHue: WARNING,
    successHue: SUCCESS,
    neutralHue: NEUTRAL,
    chromeHue:  CHROME,
  },
  space: {
    ...DEFAULT_THEME.space,
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '72px',
  }
});

export { AppTheme };
