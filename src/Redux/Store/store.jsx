import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../Reducer/loginSlice"

export const store = configureStore({
    reducer: {
        login : loginReducer,
    },
})
