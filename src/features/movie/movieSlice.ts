import { createSlice } from '@reduxjs/toolkit';
import { DefaultState, DEFAULT_STATE } from 'constants/store';
import { defaultFailure, defaultRequest, defaultSuccess } from 'utils/store';

interface Movie {
  title: string;
}

interface State extends DefaultState {
  list: Movie[];
}

const initialState: State = {
  ...DEFAULT_STATE,
  list: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getListRequest(state) {
      defaultRequest(state);
    },
    getListSuccess(state, action) {
      defaultSuccess(state);
      state.list = action.payload;
    },
    getListFailure(state, action) {
      defaultFailure(state, action);
    },
  },
});

export const { getListRequest, getListSuccess, getListFailure } = movieSlice.actions;

export default movieSlice.reducer;
