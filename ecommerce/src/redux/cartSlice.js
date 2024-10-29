import {createSlice} from '@reduxjs/toolkit';

const cartslice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCart: (state, action) =>{
            const existingProduct = state.items.find(item=> item.id === action.payload.id);
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity;
            }else{
                state.items.push({...action.payload, quantity: action.payload.quantity});
            }
        },
    },
});

export const {addToCart} = cartslice.actions;
export default cartslice.reducer;