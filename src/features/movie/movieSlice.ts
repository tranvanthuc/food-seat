import { createSlice } from '@reduxjs/toolkit';
import { DefaultState, DEFAULT_STATE } from 'constants/store';
import { FAILURE, REQUEST, SUCCESS } from 'utils/store';

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
      REQUEST(state);
    },
    getListSuccess(state, action) {
      SUCCESS(state);
      state.list = action.payload;
    },
    getListFailure(state, action) {
      FAILURE(state, action);
    },
  },
});

export const { getListRequest, getListSuccess, getListFailure } = movieSlice.actions;

export default movieSlice.reducer;
