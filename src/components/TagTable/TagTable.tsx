import { Table } from '@mui/material';
import TagTableHead from './TagTableHead';
import TagTableBody from './TagTableBody';

const TagTable = () => {
  return (
    <Table>
      <TagTableHead />
      <TagTableBody />
    </Table>
  );
};

export default TagTable;
