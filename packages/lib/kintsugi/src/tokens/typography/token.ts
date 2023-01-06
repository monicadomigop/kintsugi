interface headlineProps {
  xxs: number
  s: number
  m: number
  l: number
  xl: number
  xxl: number
}
interface bodyProps {
  xs: number
  s: number
  m: number
  l: number
}
interface fontProps {
  body: bodyProps
  headline: headlineProps
}
interface weightProps {
  light: number
  regular: number
  medium: number
  bold: number
}
interface typeProps {
  primary: string
}
interface typographyProps {
  type: typeProps
  weight: weightProps
  size: fontProps
  lh: fontProps
}

const fallback = {
  sansSerif: 'sans-serif',
}
export const typography: typographyProps = {
  type: {
    primary: 'Fira Code,' + fallback.sansSerif,
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 600,
    bold: 700,
  },
  size: {
    body: {
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
    },
    headline: {
      xxs: 20,
      s: 24,
      m: 28,
      l: 32,
      xl: 36,
      xxl: 40,
    },
  },
  lh: {
    body: {
      xs: 28,
      s: 24,
      m: 20,
      l: 20,
    },
    headline: {
      xxs: 28,
      s: 32,
      m: 36,
      l: 40,
      xl: 44,
      xxl: 52,
    },
  },
}
