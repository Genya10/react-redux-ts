import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

 const UserList:React.FC=()=>{
    const {users,error,loading} = useTypedSelector( state => state.user);
    const {fetchUsers}=useActions();

    useEffect(()=>{
        fetchUsers()
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
  <div key={user.id}>{user.email}</div>
    )}
    </div>
)
}
export default UserList;