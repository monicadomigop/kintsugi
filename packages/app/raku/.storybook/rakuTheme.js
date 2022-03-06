import { create } from '@storybook/theming';
import logoUrl from './static/kintsugi.svg';

export default create({
  base: 'light',

  colorPrimary: '#00509D',
  colorSecondary: '#d19e00',

  // UI
  appBg: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#140c00',
  textInverseColor: 'rgba(255,255,255,0.9)',

  brandTitle: 'Raku storybook',
  brandImage: logoUrl,
});
