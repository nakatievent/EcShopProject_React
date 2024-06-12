import React, { FC, useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';

import { InputLabel }       from '@mui/material';
import { FormControl }      from '@mui/base/FormControl';

import { CustomButton }     from 'components/atom/Button';
import { CustomTextField }  from 'components/atom/TextField';
import { CustomTypography } from 'components/atom/Typography';
import { BaseLayout }       from 'components/layout/BaseLayout';



export const Register: FC = () => {
  return (
    <>
    <BaseLayout>
      <CustomTypography component="h1" variant="h5">
        ログイン
      </CustomTypography>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <CustomTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          // value={email}
          autoFocus
          type="email"
          // onChange={e => setEmail(e.target.value)}
          />
        <CustomTextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          // value={password}
          type="password"
          // onChange={e => setPassword(e.target.value)}
          />
        <CustomButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          >
          ログイン
        </CustomButton>
       
      </FormControl>
    </BaseLayout>
    </>
  );

}
