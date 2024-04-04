import { Pagination as PaginationMui } from '@mui/material';
import { SxProps } from '@mui/system';

interface PaginationParams {
  count: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  sx?: SxProps;
  siblingCount?: number;
}

const Pagination = ({ count, page, handlePageChange, sx, siblingCount = 0 }: PaginationParams) => {
  return (
    <PaginationMui
      sx={sx}
      count={count}
      page={page}
      onChange={handlePageChange}
      siblingCount={siblingCount}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
