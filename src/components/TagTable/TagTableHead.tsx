import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TableCell, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DefaultParams, OrderParams, Params, SortParams } from '../../types';

interface HeadCell {
  id: SortParams;
  numeric: boolean;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: SortParams.Name,
    numeric: false,
    label: 'Name',
  },
  {
    id: SortParams.Popular,
    numeric: true,
    label: 'Count of related posts',
  },
];

const TagTableHead = () => {
  const [sortBy, setSorBy] = useState<'popular' | 'name'>(DefaultParams.Sort);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(DefaultParams.Order);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get(Params.Sort) === SortParams.Popular) {
      setSorBy(SortParams.Popular);
    } else if (searchParams.get(Params.Sort) === SortParams.Name) {
      setSorBy(SortParams.Name);
    } else {
      setSorBy(DefaultParams.Sort);
    }

    if (searchParams.get(Params.Order) === OrderParams.Asc) {
      setSortOrder(OrderParams.Asc);
    } else if (searchParams.get(Params.Order) === OrderParams.Desc) {
      setSortOrder(OrderParams.Desc);
    } else {
      setSortOrder(DefaultParams.Order);
    }
  }, [searchParams]);

  const createSortHandler = (cellId: SortParams) => () => {
    setSearchParams((prevParams) => {
      if (cellId === sortBy) {
        prevParams.set(Params.Order, sortOrder === OrderParams.Asc ? OrderParams.Desc : OrderParams.Asc);
      } else {
        prevParams.set(Params.Sort, cellId);
        prevParams.set(Params.Order, cellId === SortParams.Popular ? OrderParams.Desc : OrderParams.Asc);
      }
      prevParams.set(Params.Page, '1');
      return prevParams;
    });
  };

  return (
    <TableHead sx={{ background: grey[900] }}>
      <TableRow>
        {headCells.map((cell) => (
          <TableCell sx={{ padding: '.5rem' }} key={cell.id} align={cell.numeric ? 'right' : 'left'}>
            <TableSortLabel
              sx={({ breakpoints }) => ({
                '& .MuiTableSortLabel-icon': {
                  width: '1.5rem',
                  height: 'auto',
                  [breakpoints.down('sm')]: {
                    width: '1.125rem',
                  },
                },
              })}
              active={sortBy === cell.id}
              direction={sortOrder}
              onClick={createSortHandler(cell.id)}
            >
              <Typography
                sx={({ breakpoints }) => ({
                  fontSize: '1.5rem',
                  [breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                })}
              >
                {cell.label}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TagTableHead;
