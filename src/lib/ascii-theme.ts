export const asciiTheme = {
  colors: {
    background: '#f2efe7',
    text: '#1f1f1b',
    mutedText: '#5b5a52',
    border: '#8a887d',
    hoverBackground: '#e7e3da',
    focus: '#3a3a34',
  },
  typography: {
    fontFamily:
      '"JetBrains Mono", "IBM Plex Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
    headingLetterSpacing: '0.12em',
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    10: '40px',
  },
  border: {
    dotted: '1px dotted #8a887d',
    solid: '1px solid #8a887d',
  },
  breakpoints: {
    sm: 640,
    md: 900,
    lg: 1200,
  },
} as const;
