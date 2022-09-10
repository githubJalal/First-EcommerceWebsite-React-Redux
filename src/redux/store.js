import { configureStore } from '@reduxjs/toolkit'
import rootReducers from "./reducers"
// const store = configureStore({rootReducers: rootReducers})

    const store = configureStore({
        reducer: {
            rootReducers: rootReducers
        }})
        
    // const store = configureStore(rootReducers);

export default store;




