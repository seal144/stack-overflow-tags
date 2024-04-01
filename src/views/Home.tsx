import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import { TagTable } from '../components';
import { Params } from '../types';

const Home = () => {
  const [searchParams] = useSearchParams();
  const { isPending, error } = useTagsQuery(
    searchParams.get(Params.Page),
    searchParams.get(Params.PageSize),
    searchParams.get(Params.Sort),
    searchParams.get(Params.Order)
  );

  return (
    <Box>
      {isPending && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <TagTable />
    </Box>
  );
};

export default Home;
