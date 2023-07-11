import { createSlice } from "@reduxjs/toolkit";



export const formSlice = createSlice({

    name:"project",

    initialState:{
        users:[]
    },

    reducers:{
        formSubmit:(state, action)=>{
              state.users=[...state.users,  action.payload ]
        }
    }
})

export const { formSubmit } = formSlice.actions

export default formSlice.reducer