import { Box, Typography } from '@mui/material';
import useTagsQuery from '../api/useTagsQuery';
import useTagsStore from '../store/useTagsStore';

const Home = () => {
  const { isPending } = useTagsQuery();
  const { tags } = useTagsStore();

  return (
    <Box>
      {isPending && <Typography>Loading...</Typography>}
      {tags.map((tag) => (
        <div key={tag.name}>
          {tag.name} - {tag.count}
        </div>
      ))}
    </Box>
  );
};

export default Home;
