import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     user: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        userStore: (state, action) => {
            state.user = action.payload;
        }
    },
});
export const { userStore } = userSlice.actions;
export default userSlice.reducer;