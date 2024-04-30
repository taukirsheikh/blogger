import {createSlice} from '@reduxjs/toolkit'
const initialState={
    isLoggedIn:false,
    author:null,
    loginDetails:[],
    blogByAuthor:[]

}

const authorSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state, action) => {
            state.author = action.payload;
            console.log(state.author);
            state.isLoggedIn = true;
          },
          logout: (state) => {
            state.author = null;
            state.loginDetails = [];
            state.isLoggedIn = false;
          },
          fetchBlogList: (state, action) => {
            state.blogByAuthor = action.payload
          },
       
    }
})
export default authorSlice
export const {login, logout,fetchBlogList}=authorSlice.actions