import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import authorSlice from "./authorSlice";


 export const store = configureStore({
  reducer: {
    blogListData: blogSlice,
    user:authorSlice.reducer

    
  },
  
});

