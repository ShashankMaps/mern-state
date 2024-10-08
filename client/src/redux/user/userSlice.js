import { createSlice, current } from "@reduxjs/toolkit";

//inital state
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: { //functions
        signInStart : (state) => {
            state.loading = true;
        },
        signInSuccess : (state, action) => { //action is like event data
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure : (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart , signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;