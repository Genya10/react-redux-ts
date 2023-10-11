import { UserActionTypes,UserAction } from "../../types/user";
import { Dispatch } from "react";
import axios from "axios";

export const fetchUsers = ():any => {
    return async(dispatch:Dispatch<UserAction>)=>{
      try{
        dispatch({type:UserActionTypes.FETCH_USERS})
          const response = await axios.get('https://jsonplaceholder.typicode.com/users')
          setTimeout(()=>{
             dispatch({type:UserActionTypes.FETCH_USERS_SUCCES,payload:response.data})
            },500)
               }catch(e){
        dispatch({type:UserActionTypes.FETCH_USERS_ERROR,
        payload:'An error has occurred'})
      }
    }
}