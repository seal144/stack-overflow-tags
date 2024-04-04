import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { SxProps } from '@mui/system';
import { debounce } from 'lodash';

enum Error {
  OnlyNumbers = 'Only numbers allowed',
  Min = 'Minimum value: ',
  Max = 'Maximum value: ',
}

export interface InputDebouncedProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  numeric?: boolean;
  min?: number;
  max?: number;
  sideEffect?: (pageSize: string, searchParams: URLSearchParams) => void;
  sx?: SxProps;
}

const InputDebounced = ({ label, value, setValue, numeric = false, min, max, sideEffect, sx }: InputDebouncedProps) => {
  const [validationError, setValidationError] = useState(' ');
  const [searchParams] = useSearchParams();

  const clearError = () => {
    setValidationError(' ');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSideEffect = useCallback(
    debounce((changedValue: string, isError: boolean) => {
      if (sideEffect && !isError) {
        sideEffect(changedValue, searchParams);
      }
    }, 800),
    [searchParams]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearError();
    let isError = false;
    if (numeric && event.target.value.match(/[^0-9]/)) {
      setValidationError(Error.OnlyNumbers);
      return;
    }
    if (event.target.value && numeric && min && Number(event.target.value) < min) {
      setValidationError(Error.Min + min);
      isError = true;
    }
    if (event.target.value && numeric && max && Number(event.target.value) > max) {
      setValidationError(Error.Max + max);
      isError = true;
    }
    setValue(event.target.value);
    debouncedSideEffect(event.target.value, isError);
  };

  useEffect(() => {
    if (value === '') {
      clearError();
    }
  }, [value]);

  useEffect(() => {
    let clearErrorTimeout: NodeJS.Timeout;
    if (validationError === Error.OnlyNumbers) {
      clearErrorTimeout = setTimeout(() => {
        clearError();
      }, 2000);
    }

    return () => {
      clearTimeout(clearErrorTimeout);
    };
  }, [validationError]);

  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={sx}
      error={validationError !== ' '}
      helperText={validationError}
    />
  );
};

export default InputDebounced;
