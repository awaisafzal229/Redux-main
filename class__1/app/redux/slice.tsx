// import { createSlice, nanoid, current } from "@reduxjs/toolkit";
// type User = {

// }
// type initialState = {
//     users: User[];
// }
// const storeUserString = localStorage.getItem("users");
// const initialState = {
//     users: storeUserString ? JSON.parse(storeUserString) : []
// }
// const Slice = createSlice({
//     name: 'addUserSlice',
//     initialState,
//     reducers: {
//         addUser: (state: any, action: any) => {
//             // console.log(action);

//             const data = {
//                 id: nanoid(),
//                 name: action.payload
//             }
//             // return {
//             //     ...state,
//             //     users: [...state.users, data] // Return a new state object with updated users array
//             // };
//             state.users.push(data);
//             let userData = JSON.stringify(current(state.users))
//             localStorage.setItem("users", userData)
//         },
//         removeUser: (state: any, action: any) => {
//             // console.log(action);
//             const data = state.users.filter((item: any) => {
//                 return item.id !== action.payload
//             })
//             state.users = data
//             let deleteUser = JSON.stringify(current(state.users))
//             localStorage.removeItem("users", deleteUser)
//         }
//     }
// });

// export const { addUser, removeUser } = Slice.actions;
// export default Slice.reducer;


import { createSlice, nanoid, current } from "@reduxjs/toolkit";

type User = {
    id: string;
    name: string;
};

type InitialState = {
    users: User[];
};

const loadUsersFromLocalStorage = (): User[] => {
    const storedUsers: User[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("user_")) {
            const user = JSON.parse(localStorage.getItem(key) || "");
            storedUsers.push(user);
        }
    }
    return storedUsers;
};

const saveUserToLocalStorage = (user: User): void => {
    const key = `user_${user.id}`;
    localStorage.setItem(key, JSON.stringify(user));
};

const removeUserFromLocalStorage = (userId: string): void => {
    const keyToRemove = `user_${userId}`;
    localStorage.removeItem(keyToRemove);
};

const initialState: InitialState = {
    users: loadUsersFromLocalStorage(),
};

const Slice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data: User = {
                id: nanoid(),
                name: action.payload,
            };

            state.users.push(data);
            saveUserToLocalStorage(data);
        },
        removeUser: (state, action) => {
            const userIdToRemove = action.payload;
            const updatedUsers = state.users.filter((user) => user.id !== userIdToRemove);
            state.users = updatedUsers;
            removeUserFromLocalStorage(userIdToRemove);
        },
    },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
