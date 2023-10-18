import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { object } from 'yup';

// const data = localStorage.getItem('adminToken') ?? '';
// const parsedData: { token: string } = data ? JSON.parse(data) : null;
// interface UserData {
//     user: object;
//   }
// const initialState = {
//     data: parsedData ?? {
//         // token: '',
//     }
// }

interface UserData {
    user: object;
}

const initialState: UserData = {
    user: {},
};
const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserTokenAndUserData(state, action: PayloadAction<{ token: string, user: object }>) {
            // set local storage
            localStorage.setItem('userToken', JSON.stringify({ token: action.payload.token, }))
            // set redux state
            state.user = { userdata: action.payload.user }
        },

        deleteUserTokenAndUserData(state) {
            // state.data = { token: '' }
            localStorage.removeItem('userToken')
            state.user = {userdata:""}
        }
    }
})
// export const { setUserToken, deleteUserToken } = userAuthSlice.actions
// export const selectUserAuth = (state: RootState) => state.userAuth.data;
// export const userAuthReducer = userAuthSlice.reducer;
export const { setUserTokenAndUserData, deleteUserTokenAndUserData } = userAuthSlice.actions;
export const selectUserAuth = (state: RootState) => state.userAuth.user;
export const userAuthReducer = userAuthSlice.reducer;