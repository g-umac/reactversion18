import * as actionTypes from '../constants/RepoConstants'
import axios from "axios";
 

export const  gitHubPepoAction = () =>async (dispatch: any, language:string) =>{
    const baseUrl = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
try {
        dispatch({ type: actionTypes.GET_GITHUBREPO_REQUEST });
        const res = await axios.get(baseUrl);
        dispatch({
          type: actionTypes.GET_GITHUBREPO_SUCCESS,
          payload: res.data,
    
        });
      } catch (error) {
        console.log('error log');
        dispatch({
          type: actionTypes.GET_GITHUBREPO_FAIL,
          payload:
            console.error("message")
        });
      }
}