import { createSlice } from "@reduxjs/toolkit";


export const task1Slice = createSlice({

    name:"task1",

    initialState:{
        users:[]
    },

    reducers:{
        form1Submit:(state, action)=>{
              state.users=[...state.users,  action.payload ]
        }
    }
})

export const {form1Submit} = task1Slice.actions;

export default task1Slice.reducer