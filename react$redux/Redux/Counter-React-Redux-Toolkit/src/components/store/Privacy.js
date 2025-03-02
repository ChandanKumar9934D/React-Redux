import { createSlice } from "@reduxjs/toolkit";

const PrivacySlice=createSlice({
   name:"privacy",
   initialState:false,
   reducers:{
    toggel:(store)=>{
        return store=!store

    }
   }
})
export  const privacyAction=PrivacySlice.actions
export default PrivacySlice
