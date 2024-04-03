import { Box } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import TagTable from '../components/TagTable';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { isPending, error } = useTagsQuery();

  return (
    <Box>
      {error && <ErrorMessage message={'Oops, something went wrong!'} retry />}
      {!error && <TagTable loading={isPending} />}
    </Box>
  );
};

export default Home;
