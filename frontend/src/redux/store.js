import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./authslice"
import songReducer from "./songSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        song: songReducer
    }
})