export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  fonts: {
    main: {
      regular: 'Inter-Regular',
      medium: 'Inter-Medium',
      semiBold: 'Inter-SemiBold',
      bold: 'Inter-Bold',
    },
    secondary: {
      bold: 'Roboto-Bold',
    },
  },
  fontSizes: [
    '10px', // 0
    '12px', // 1
    '14px', // 2
    '15px', // 3
    '16px', // 4
    '18px', // 5
    '24px', // 6
    '30px', // 7
    '32px', // 8
    '48px', // 9
    '50px', // 10
    '64px', // 11
  ],
  colors: {
    accent: '#FFB400',
    text: {
      primary: { dark: '#E4E6EB', light: '#767676' },
      secondary: { dark: '#FFFFFF', light: '#2B2B2B' },
      dark: '#2B2B2B',
      light: '#FFFFFF',
    },
    background: {
      primary: { dark: '#242526', light: '#F0F0F6' },
      secondary: { dark: '#2B2B2B', light: '#EBD8FF' },
      dark: '#2B2B2B',
    },
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};
