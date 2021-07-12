import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
