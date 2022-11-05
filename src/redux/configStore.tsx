import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './reducer/adminReducer'
import keySearchReducer from './reducer/keySearchReducer'
import keywordReducer from './reducer/keywordReducer'
import productReducer from './reducer/productReducer'
import roomDetailReducer from './reducer/roomDetailReducer'
import roomlistReducer from './reducer/roomlistReducer'
import profileReducer from './reducer/profileReducer'
import userReducer from './reducer/userReducer'


export const store = configureStore({
    reducer:{
        productReducer: productReducer,
        keywordReducer: keywordReducer,
        keySearchReducer: keySearchReducer,
        adminReducer: adminReducer,
        roomDetailReducer : roomDetailReducer,
        roomlistReducer: roomlistReducer,
        profileReducer: profileReducer,
        userReducer : userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch