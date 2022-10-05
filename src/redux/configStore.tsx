import {configureStore,PayloadAction} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        numberReducer: (state,action:PayloadAction<number>) =>{
            return 1;
        },
       
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch