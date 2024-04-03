import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Table } from '@mui/material';
import { debounce } from 'lodash';
import TagTableHead from './TagTableHead';
import TagTableBody from './TagTableBody';
import Pagination from '../Pagination';
import InputDebounced from '../InputDebounced';
import useTagsStore from '../../store/useTagsStore';
import { Params, DefaultParams } from '../../types';

const TagTable = () => {
  const { tags, totalPages } = useTagsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSizeInput, setPageSizeInput] = useState(
    searchParams.get(Params.PageSize) ? (searchParams.get(Params.PageSize) as string) : DefaultParams.PageSize
  );
  const [paginationPage, setPaginationPage] = useState(
    searchParams.get(Params.Page) ? Number(searchParams.get(Params.Page)) : Number(DefaultParams.Page)
  );

  const SideEffectPageSizeChange = (pageSize: string) => {
    setSearchParams((prevParams) => {
      if (pageSize === '') {
        prevParams.set(Params.PageSize, DefaultParams.PageSize);
      } else {
        prevParams.set(Params.PageSize, String(pageSize));
      }
      return prevParams;
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedParamsPageChange = useCallback(
    debounce((page: number) => {
      setSearchParams((prevParams) => {
        prevParams.set(Params.Page, String(page));
        return prevParams;
      });
      window.scrollTo(0, 0);
    }, 800),
    []
  );

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setPaginationPage(page);
    debouncedParamsPageChange(page);
  };

  useEffect(() => {
    if (searchParams.get(Params.Page) && Number(searchParams.get(Params.Page)) !== paginationPage) {
      setPaginationPage(Number(searchParams.get(Params.Page)));
    }

    if (searchParams.get(Params.PageSize) && searchParams.get(Params.PageSize) !== pageSizeInput) {
      setPageSizeInput(searchParams.get(Params.PageSize) as string);
    }
    // this useEffect should only be invoked on searchParams change and not for paginationPage change, because the params change is debounced (to avoid unnecessary requests)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Box>
      <InputDebounced
        sx={{ marginBottom: 1 }}
        label="Tags per page"
        value={pageSizeInput}
        setValue={setPageSizeInput}
        sideEffect={SideEffectPageSizeChange}
        numeric
        min={10}
        max={100}
      />
      {tags.length >= 15 && (
        <Pagination
          sx={{ marginBottom: 3 }}
          count={totalPages}
          page={paginationPage}
          handlePageChange={handlePageChange}
        />
      )}
      <Table>
        <TagTableHead />
        <TagTableBody />
      </Table>
      <Pagination sx={{ marginTop: 3 }} count={totalPages} page={paginationPage} handlePageChange={handlePageChange} />
    </Box>
  );
};

export default TagTable;
