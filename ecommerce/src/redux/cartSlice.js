import {createSlice} from '@reduxjs/toolkit';

const cartslice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        totalQuantity: 0,
    },
    reducers:{
        addToCart: (state, action) =>{
            const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex !== -1) {
                state.items[existingProductIndex] = {
                    ...state.items[existingProductIndex],
                    quantity: state.items[existingProductIndex].quantity + action.payload.quantity
                };
            }else{
                state.items.push({...action.payload, quantity: action.payload.quantity});
            }
            state.totalQuantity += action.payload.quantity;
        },
        removeFromCart: (state, action) =>{
            const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex !== -1) {
                const existingProduct = state.items[existingProductIndex];
                state.totalQuantity -= existingProduct.quantity;
                state.items.splice(existingProductIndex, 1);
            } 
        },
        updateQuantity: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload.id);
            if (existingProduct) {
                const previousQuantity = existingProduct.quantity; 
                existingProduct.quantity = action.payload.quantity;
                
                if (existingProduct.quantity <= 0) {
                    state.totalQuantity -= previousQuantity;
                    const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
                    state.items.splice(existingProductIndex, 1); 
                } else {
                    state.totalQuantity += action.payload.quantity - previousQuantity;
                }
            }
        }
    },
});

export const {addToCart, removeFromCart, updateQuantity} = cartslice.actions;
export default cartslice.reducer;