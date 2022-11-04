import {configureStore} from '@reduxjs/toolkit'
import keySearchReducer from './reducer/keySearchReducer'
import keywordReducer from './reducer/keywordReducer'
import productReducer from './reducer/productReducer'
import roomDetailReducer from './reducer/roomDetailReducer'
import roomlistReducer from './reducer/roomlistReducer'
import profileReducer from './reducer/profileReducer'


export const store = configureStore({
    reducer:{
        productReducer: productReducer,
        keywordReducer: keywordReducer,
        keySearchReducer: keySearchReducer,
        roomDetailReducer : roomDetailReducer,
        roomlistReducer: roomlistReducer,
        profileReducer: profileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch