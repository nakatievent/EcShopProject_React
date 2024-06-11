import React, { FC } from 'react';
import { SxProps }   from '@mui/system';
import Button        from '@mui/material/Button';

type Props = {
  type?     : 'submit'
  |'button'
  |'reset'
  variant?  : 'text'
  |'outlined'
  |'contained'
  fullWidth?: boolean
  sx?       : SxProps
  children  : React.ReactNode;
  onClick?  : () => void;
}

export const CustomButton: FC<Props> = (props) => {
  const { type, variant, sx, children } = props

  return (
    <Button
      type={type}
      fullWidth
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};
