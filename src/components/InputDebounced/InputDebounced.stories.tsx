import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import InputDebounced, { InputDebouncedProps } from './InputDebounced';

const meta: Meta<typeof InputDebounced> = {
  title: 'InputDebounced',
  component: InputDebounced,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
};

export default meta;

export const Default = ({
  label = 'label',
  numeric,
  min,
  max,
  sx,
}: Omit<InputDebouncedProps, 'value' | 'setValue' | 'sideEffect'>) => {
  const [value, setValue] = useState('');

  return (
    <InputDebounced value={value} setValue={setValue} label={label} numeric={numeric} min={min} max={max} sx={sx} />
  );
};
