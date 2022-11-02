import {configureStore} from '@reduxjs/toolkit'
import keySearchReducer from './reducer/keySearchReducer'
import keywordReducer from './reducer/keywordReducer'
import productReducer from './reducer/productReducer'


export const store = configureStore({
    reducer:{
        productReducer: productReducer,
        keywordReducer: keywordReducer,
        keySearchReducer: keySearchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch