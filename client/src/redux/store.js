import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';  //aapn nav dil ah userReducer or userSlice same bcz export defaullt
import { persistReducer} from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const  rootReducer = combineReducers({user: userReducer});

//to maintain user logged in 
const persistConfig = {  
    key:'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
//to maintain user logged in 

export const store =  configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:false, //we will not get any error for not serializing the variable in vour browser
    }),  
});


export const persistor =  persistStore(store);