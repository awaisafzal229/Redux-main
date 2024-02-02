import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    users : []
}
const Slice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers:{
        addUser:(state:any, action:any) =>{
            // console.log(action);
            
            const data = {
                id : nanoid(),
                name: action.payload
            }
            // state.users.push(data);
            return {
                ...state,
                users: [...state.users, data] // Return a new state object with updated users array
              };
        },
        removeUser:(state:any,action:any) =>{
            // console.log(action);
            const data = state.users.filter((item:any)=>{
                return item.id!==action.payload
            })
            state.users = data
        }
    }
});

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;
