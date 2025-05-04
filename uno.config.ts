import {defineConfig, presetWind3, transformerVariantGroup} from 'unocss'

const colors = {
  primary: {
    20: '#4d0001',
    30: '#600c20',
    40: '#a61518',
    60: '#ed0000'
  },
  secondary: {
    50: '#0073DD'
  },
  neutral: {
    0: '#000000',
    80: '#CCCCCC',
    100: '#FFFFFF',
  },
}

const DEFAULT_FONT = 'Source Sans Pro, sans-serif'

export default defineConfig({
  presets: [
    presetWind3()

  ],
  shortcuts: {
    'text-title-large': 'text-[34px] leading-[38px] font-semibold',
    'text-title-small-bold': 'text-[30px] leading-[38px] font-bold',
    'text-title-small-regular': 'text-[30px] leading-[38px] font-normal',
    'text-heading-medium': 'text-[24px] leading-[32px] font-bold',
    'text-heading-small': 'text-[20px] leading-[26px] font-bold',
    'text-body-medium-bold': 'text-[18px] leading-[24px] font-bold',
    'text-body-medium-semibold': 'text-[18px] leading-[24px] font-semibold',
    'text-body-medium-regular': 'text-[18px] leading-[24px] font-normal',
  },
  transformers: [transformerVariantGroup()],
  preflights: [
    {
      getCSS: () => `
        :root {
          --default-text-color: ${colors.neutral["0"]};
          --default-font: ${DEFAULT_FONT}
        }
      `
    }
  ],
  theme: {
    fontFamily: {
      sans: DEFAULT_FONT,
    },
    colors
  },
  variants: [
    {
      match: (matcher) => {
        if (!matcher.startsWith('focus-visible:')) return matcher
        return {
          matcher: matcher.slice(14),
          selector: s => `${s}:focus-visible`,
        }
      },
    }
  ]
})
