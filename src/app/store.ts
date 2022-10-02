import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MovieListSlice from '../reducers/MovieListSlice';
 

export const store = configureStore({
  reducer: {
   myyallMovies:MovieListSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
