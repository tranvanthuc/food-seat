import { PayloadAction } from '@reduxjs/toolkit';
import { DefaultState } from 'constants/store';

export const defaultRequest = (state: DefaultState) => {
  state.loading = true;
};

export const defaultSuccess = (state: DefaultState) => {
  state.status = true;
  state.loading = false;
};
export const defaultFailure = (state: DefaultState, action: PayloadAction<any>) => {
  state.status = false;
  state.loading = false;
  state.error = action.payload;
};
