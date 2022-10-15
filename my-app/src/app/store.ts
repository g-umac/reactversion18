import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { getRepoReducer } from './reducer/gitHubRepoReducers';
import { useDispatch } from 'react-redux'
import  allrepoSlice  from './reducer/allrepoSlice'

 
 export const store = configureStore({ 
    reducer :{
      repos:allrepoSlice
    
    }
  
}); 
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
 export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
