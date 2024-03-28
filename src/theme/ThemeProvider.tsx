import { PropsWithChildren } from 'react';
import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProviderMUI theme={darkTheme}>{children}</ThemeProviderMUI>;
};

export default ThemeProvider;
