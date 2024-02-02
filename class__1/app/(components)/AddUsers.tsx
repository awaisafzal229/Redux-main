"use client"
import Link from "next/link";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

function AddUsers() {
  const [name, setName]:any = useState("");
  const dispatch = useDispatch()
  const userDispatch = ()=>{
    // console.log(name);
    
    dispatch(addUser(name))
  }
  return (
    <div className="add-user">
      <h3>Users List</h3>
      <input type="text" className="add-user-input"
      onChange={(e)=>setName(e.target.value)}
      placeholder="Add New user" />
      <button onClick={userDispatch} className="add-user-btn">Add User</button>
      <Link href={"/removeuser"}>Remove User</Link>
    </div>
  );
}

export default AddUsers;
