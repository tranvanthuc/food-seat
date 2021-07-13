import { PayloadAction } from '@reduxjs/toolkit';
import { DefaultState } from 'constants/store';

export const REQUEST = (state: DefaultState) => {
  state.loading = true;
};

export const SUCCESS = (state: DefaultState) => {
  state.status = true;
  state.loading = false;
};
export const FAILURE = (state: DefaultState, action: PayloadAction<any>) => {
  state.status = false;
  state.loading = false;
  state.error = action.payload;
};
