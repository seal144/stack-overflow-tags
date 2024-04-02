import { Pagination as PaginationMui } from '@mui/material';
import { SxProps } from '@mui/system';

interface PaginationParams {
  count: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  sx?: SxProps;
}

const Pagination = ({ count, page, handlePageChange, sx }: PaginationParams) => {
  return (
    <PaginationMui
      sx={sx}
      count={count}
      page={page}
      onChange={handlePageChange}
      siblingCount={0}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
