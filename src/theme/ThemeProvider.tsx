import { PropsWithChildren } from 'react';
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProviderMui theme={darkTheme}>{children}</ThemeProviderMui>;
};

export default ThemeProvider;
