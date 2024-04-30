import {createSlice} from '@reduxjs/toolkit'

const initialState={
    blogList:[]

}

const blogSlice=createSlice(
    {
        name:'blogListData',
        initialState,
        reducers:{
            getBlogList:(state, action)=>
            state.blogList=action.payload
        },
    }
)
export const {getBlogList}=blogSlice.actions
export default blogSlice.reducer