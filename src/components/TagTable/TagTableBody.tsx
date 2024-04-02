import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import useTagsStore from '../../store/useTagsStore';

const TagTableBody = () => {
  const { tags } = useTagsStore();

  return (
    <TableBody>
      {tags.map((tag) => (
        <TableRow key={tag.name}>
          <TableCell sx={({ spacing }) => ({ padding: spacing(1) })}>
            <Typography
              sx={({ breakpoints }) => ({
                fontSize: '1.5rem',
                [breakpoints.down('sm')]: {
                  fontSize: 'unset',
                },
              })}
            >
              {tag.name}
            </Typography>
          </TableCell>
          <TableCell align="right" sx={({ spacing }) => ({ padding: spacing(1) })}>
            <Typography
              sx={({ breakpoints }) => ({
                fontSize: '1.5rem',
                [breakpoints.down('sm')]: {
                  fontSize: 'unset',
                },
              })}
            >
              {tag.count}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TagTableBody;
