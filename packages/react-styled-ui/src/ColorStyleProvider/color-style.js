const colorStyle = {
  dark: {
    // Text color
    text: {
      emphasis: 'white:primary',
      primary: 'white:primary',
      secondary: 'white:secondary',
      tertiary: 'white:tertiary',
      disabled: 'white:disabled',
      link: 'blue:40',
      warning: 'orange:50',
      error: 'red:50',
    },

    // Background color
    background: {
      primary: 'gray:100',
      secondary: 'gray:90',
      tertiary: 'gray:80',
      inverse: 'gray:10',
      selected: 'blue:60',
      marked: '#fce79e',
    },

    // Shadow color
    // Note: The shadow style props will be removed from 'styled-ui-theme'.
    shadow: {
      sm: '0 2px 8px 0 rgba(0, 0, 0, 0.48), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
      md: '0 4px 16px 0 rgba(0, 0, 0, 0.48), 0 2px 4px 0 rgba(0, 0, 0, 0.16)',
      lg: '0 8px 32px 0 rgba(0, 0, 0, 0.48), 0 4px 8px 0 rgba(0, 0, 0, 0.16)',
    },

    // Severity color: critical, high, medium, low, none
    severity: {
      critical: 'red:60',
      high: 'red:50',
      medium: 'orange:50',
      low: 'yellow:50',
      safe: 'green:40',
      info: 'blue:50',
      unknown: 'gray:50',
    },

    // Chart color scheme
    // https://docs.appian.com/suite/help/20.2/Chart_Color_Scheme.html
    chart: {
      classic: {
        colors: [
          'gray:50',
          'blue:50',
          'green:40',
          'orange:50',
          'cyan:40',
          'red:50',
          'purple:50',
          'teal:40',
          'magenta:40',
          'green:30',
          'yellow:50',
        ],
      },
    },
  },
  light: {
    // Text color
    text: {
      emphasis: 'black:emphasis',
      primary: 'black:primary',
      secondary: 'black:secondary',
      tertiary: 'black:tertiary',
      disabled: 'black:disabled',
      link: 'blue:60',
      warning: 'orange:50',
      error: 'red:60',
    },

    // Background color
    background: {
      primary: 'white:emphasis',
      secondary: 'gray:10',
      tertiary: 'gray:20',
      inverse: 'gray:70',
      selected: 'blue:60',
      marked: '#fce79e',
    },

    // Shadow color
    // Note: The shadow style props will be removed from 'styled-ui-theme'.
    shadow: {
      sm: '0 2px 8px 0 rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',
      md: '0 4px 16px 0 rgba(0, 0, 0, 0.16), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
      lg: '0 8px 32px 0 rgba(0, 0, 0, 0.16), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
    },

    // Severity color: critical, high, medium, low, none
    severity: {
      critical: 'red:60',
      high: 'red:60',
      medium: 'orange:50',
      low: 'yellow:50',
      safe: 'green:50',
      info: 'blue:60',
      unknown: 'gray:50',
    },

    // Chart color scheme
    // https://docs.appian.com/suite/help/20.2/Chart_Color_Scheme.html
    chart: {
      classic: {
        colors: [
          'gray:50',
          'blue:60',
          'green:50',
          'orange:50',
          'cyan:40',
          'red:60',
          'purple:60',
          'teal:40',
          'magenta:50',
          'green:30',
          'yellow:50',
        ],
      },
    },
  },
};

export default colorStyle;
