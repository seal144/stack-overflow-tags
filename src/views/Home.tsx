import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import TagTable from '../components/TagTable';
import useTagsStore from '../store/useTagsStore';
import { Params } from '../types';

const Home = () => {
  const [searchParams] = useSearchParams();
  const { isPending, error } = useTagsQuery(
    searchParams.get(Params.Page),
    searchParams.get(Params.PageSize),
    searchParams.get(Params.Sort),
    searchParams.get(Params.Order)
  );
  const { tags } = useTagsStore();

  return (
    <Box>
      {/* TODO: error state */}
      {isPending && <p>Loading...</p>}
      {/* TODO: error state */}
      {error && <p>{error.message}</p>}
      {!isPending && !error && !!tags.length && <TagTable />}
    </Box>
  );
};

export default Home;
