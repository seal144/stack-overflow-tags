import { TableBody, TableCell, TableRow, Skeleton } from '@mui/material';

const TagTableBodySkeleton = ({ rows }: { rows: number }) => {
  return (
    <TableBody>
      {new Array(rows <= 100 ? rows : 100).fill('x').map((_row, index) => (
        <TableRow key={index}>
          <TableCell sx={({ spacing }) => ({ padding: spacing(1) })}>
            <Skeleton variant="rounded" height={36} />
          </TableCell>
          <TableCell sx={({ spacing }) => ({ padding: spacing(1) })}>
            <Skeleton variant="rounded" height={36} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TagTableBodySkeleton;
