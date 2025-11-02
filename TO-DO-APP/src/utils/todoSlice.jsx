import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        deleteItems:(state,action)=>{
            state.items = state.items.filter((_, index) => index !== action.payload);
        }
    }
})


export const{addItems,deleteItems}=todoSlice.actions
export default todoSlice.reducer;
