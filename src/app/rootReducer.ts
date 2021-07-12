import { combineReducers } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import movie from 'features/movie/movieSlice';

const reducer = combineReducers({
  counter,
  movie,
});

export default reducer;
