import { createSlice } from '@reduxjs/toolkit';


const initialState = {
     product: []
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        productStore: (state, action) => {
            state.product = action.payload;
        }
    },
});
export const { productStore } = productSlice.actions;
export default productSlice.reducer;