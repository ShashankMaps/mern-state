import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';  //aapn nav dil ah userReducer or userSlice same bcz export defaullt
export default configureStore({
  reducer: {user: userReducer},

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:false, //we will not get any error for not serializing the variable in vour browser
    })  
});