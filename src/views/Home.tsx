import { Box } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import TagTable from '../components/TagTable';

const Home = () => {
  const { isPending, error } = useTagsQuery();

  return (
    <Box>
      {/* TODO: error state */}
      {error && <p>{error.message}</p>}
      {!error && <TagTable loading={isPending} />}
    </Box>
  );
};

export default Home;
