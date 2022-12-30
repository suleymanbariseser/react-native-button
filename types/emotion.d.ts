import '@emotion/react';
import { ColorValue, ViewStyle } from 'react-native';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
    };
  }
}