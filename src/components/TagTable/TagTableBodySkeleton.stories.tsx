import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@mui/material';
import TagTableBodySkeleton from './TagTableBodySkeleton';

const meta: Meta<typeof TagTableBodySkeleton> = {
  title: 'TagTable/TagTableBodySkeleton',
  component: TagTableBodySkeleton,
  decorators: [(Story) => <Table sx={{ maxWidth: '900px' }}>{Story()}</Table>],
};

export default meta;

type Story = StoryObj<typeof TagTableBodySkeleton>;

export const Default: Story = {
  args: {
    rows: 12,
  },
};
