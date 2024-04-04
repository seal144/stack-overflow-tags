import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@mui/material';
import ThemeProvider from '../../theme/ThemeProvider';
import TagTableHead from './TagTableHead';

const meta: Meta<typeof TagTableHead> = {
  title: 'TagTable/TagTableHead',
  component: TagTableHead,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ThemeProvider>
          <Table sx={{ maxWidth: '900px' }}>{Story()}</Table>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TagTableHead>;

export const Default: Story = {};
