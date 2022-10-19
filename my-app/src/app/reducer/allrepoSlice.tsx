import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
 import { GithubRepo } from '../../interface/GithubRepo.interface';

  export interface RepoListState {
    allRepoList: GithubRepo[];
    loading: 'idle',
}

const initialState: RepoListState = {
    allRepoList: [],
    loading: 'idle',
}
 
 
const reposAPI=`https://api.github.com/search/repositories?q=stars:>1+language:en&sort=stars&order=desc&type=Repositories`
export const allrepoSlice = createSlice({
    name: 'repos',
    initialState: {
      loading: 'idle',
      allRepoList: [],
    },
    reducers: {
      reposLoading(state ) {
         if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      },
      reposReceived(state, action) {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.allRepoList = action.payload
        }
      },
    },
  })
  
  // Destructure and export the plain action creators
  export const { reposLoading, reposReceived } = allrepoSlice.actions
  
  // Define a thunk that dispatches those action creators
  export const fetchrepos = () => async (dispatch:any) => { 
    console.log("Fetc")
    dispatch(reposLoading())
    const response = await axios(reposAPI)
    console.log(response?.data?.items) 
    dispatch(reposReceived(response?.data?.items))
  } 
export default allrepoSlice.reducer