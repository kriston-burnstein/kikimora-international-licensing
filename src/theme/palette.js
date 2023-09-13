export const light = {
  alternate: {
    main: '#FFF8EB', //background swoops light cream
    dark: '#F4EDE2', //background swoops sligthly darker cream
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: {
    main: '#FFAC00',      //main dark yellow
    light: '#ffb74d',     //muted yellow/orange
    dark: '#FF9800',      //orange (ex: hover)
    contrastText: '#fff', //white
  },
  secondary: {
    main: '#f9b934',
    light: '#ffb74d',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
  },
};

export const dark = {
  alternate: {
    main: '#202020', //background swoops dark grey
    dark: '#2C2C2C', //background swoops slightly lighter grey
  },
  cardShadow: 'rgba(255, 255, 255, .11)',  //adjusted shadow for better visibility on dark bg
  mode: 'dark',
  primary: {
    main: '#FFAC00',
    light: '#ffb74d',
    dark: '#FF9800',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f9b934',
    light: '#ffb74d',
    dark: '#FF9800',
    contrastText: '#EEEEEF', //muted white for better contrast on dark bg
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#2C2C2C', 
    default: '#2C2C2C', 
    level2: '#242424', 
    level1: '#2C2C2C', 
  },
};

