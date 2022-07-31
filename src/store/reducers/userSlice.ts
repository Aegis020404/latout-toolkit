import {IUser, UserState} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreator";



const initialState:UserState = {
    users: [],
    error: '',
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userFetching(state) {
        //     state.isLoading = true
        // },
        // userFetchingSuccess(state, actin:PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = actin.payload
        // },
        // userFetchingError(state, actin:PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = actin.payload
        // },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;