import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@mui/material';
import TagTableBody from './TagTableBody';
import { mockedTagsData } from '../../store/mockedTagsData';

const meta: Meta<typeof TagTableBody> = {
  title: 'TagTable/TagTableBody',
  component: TagTableBody,
  decorators: [(Story) => <Table sx={{ maxWidth: '900px' }}>{Story()}</Table>],
};

export default meta;

type Story = StoryObj<typeof TagTableBody>;

export const Default: Story = {
  args: {
    tags: mockedTagsData,
  },
};
