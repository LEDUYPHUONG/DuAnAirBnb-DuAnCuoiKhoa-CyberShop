import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './reducer/adminReducer'
import keySearchReducer from './reducer/keySearchReducer'
import keywordReducer from './reducer/keywordReducer'
import productReducer from './reducer/productReducer'


export const store = configureStore({
    reducer:{
        productReducer: productReducer,
        keywordReducer: keywordReducer,
        keySearchReducer: keySearchReducer,
        adminReducer: adminReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch