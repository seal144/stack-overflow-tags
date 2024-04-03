import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorMessageProps {
  message: string;
  retry?: boolean;
}

const ErrorMessage = ({ message, retry = false }: ErrorMessageProps) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Typography variant="h6" sx={{ color: red[500] }}>
      {message}
      {retry && (
        <Box>
          <Button
            onClick={navigateHome}
            color="error"
            variant="contained"
            sx={{ textTransform: 'none', fontSize: '1.25rem', padding: '0 .5rem' }}
          >
            <RefreshIcon /> Click to retry now
          </Button>{' '}
          or try again later
        </Box>
      )}
    </Typography>
  );
};

export default ErrorMessage;
