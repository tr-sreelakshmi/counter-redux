import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './CounterSlice'



export  const store = configureStore({
    reducer:{
                 //reducers should be key value pair
                 counter : counterSlice
        
    }
})