import { Box } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import TagTable from '../components/TagTable';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { isPending, error } = useTagsQuery();

  const errorMessage = error?.message.includes('page above 25 requires access')
    ? 'Oops, there is an error. It is only possible to browse first 25 pages'
    : 'Oops, something went wrong!';

  return (
    <Box>
      {error && <ErrorMessage message={errorMessage} retry />}
      {!error && <TagTable loading={isPending} />}
    </Box>
  );
};

export default Home;
