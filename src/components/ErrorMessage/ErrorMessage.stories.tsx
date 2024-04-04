import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'ErrorMessage',
  component: ErrorMessage,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'Oops, something went wrong!',
    retry: false,
  },
};

export const WithRetry: Story = {
  args: {
    message: 'Oops, something went wrong!',
    retry: true,
  },
};
