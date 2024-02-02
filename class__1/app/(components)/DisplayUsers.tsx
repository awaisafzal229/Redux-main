"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";
function Displayusers() {
  const userData = useSelector((data: any) => data.users)
  const dispatch= useDispatch();
  console.log(userData)
  return (
    <div className="display-user">
      <h3>Users List</h3>
      {
        userData.map((user: any) => (
            <>
              <div className="users">
                <span>{user.name}</span>
                <button onClick={()=>dispatch(removeUser(user.id))}>Delete</button>
              </div>
            </>
          )
        )
      }
    </div>
  )
}

export default Displayusers
