import React from "react";
import { useSelector } from "react-redux"
import { UseSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../store/reducers/rootReducer";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/action-creators/user";

 const UserList:React.FC=()=>{
    const {users,error,loading} = useTypedSelector( state => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
   if(loading){
    return <h1>Loading...</h1>
   }
   if(error){
    return <h1>{error}</h1>
   }
    
return(
    <div>
  {users.map(user=>
  <div key={user.id}>{user.name}</div>
    )}
    </div>
)
}
export default UserList;