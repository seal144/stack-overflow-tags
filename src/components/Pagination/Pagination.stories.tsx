import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    count: 200,
    page: 1,
    handlePageChange: () => {},
  },
};
