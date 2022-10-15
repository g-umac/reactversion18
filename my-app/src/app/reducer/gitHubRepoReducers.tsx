 import { GithubRepo } from '../../interface/GithubRepo.interface';
import * as actionTypes from '../constants/RepoConstants'

export interface RepoListState {
    allRepoList: GithubRepo[];
     loading: boolean;
  }
  
  const initialState: RepoListState = {
    allRepoList: [],
    loading: true,
  };
export const getRepoReducer = (state = { allRepoList: [] }, action:any) => {
    switch (action.type) {
      case actionTypes.GET_GITHUBREPO_REQUEST:
        return {
          loading: true,
          allRepoList: [],
        };
      case actionTypes.GET_GITHUBREPO_SUCCESS:
        return {
          allRepoList: action.payload,
          loading: false,
        };
      case actionTypes.GET_GITHUBREPO_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

