import { PropsWithChildren } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { blueGrey, teal } from '@mui/material/colors';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ backgroundColor: blueGrey[900], color: teal[100] }}>
      <Container
        fixed
        maxWidth="md"
        sx={({ spacing }) => ({
          minHeight: '100vh',
          paddingTop: spacing(4),
          paddingBottom: spacing(4),
        })}
      >
        <Typography
          variant="h3"
          sx={({ spacing, breakpoints }) => ({
            marginBottom: spacing(2),
            [breakpoints.down('sm')]: {
              fontSize: '1.75rem',
            },
          })}
        >
          Stack Overflow Tags
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
