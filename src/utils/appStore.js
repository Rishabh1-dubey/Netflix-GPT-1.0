
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"

const appStore =configureStore({
    reducer: {
        user:userReducer,
        movies:movieReducer,
    },
   
   //here userSlice ka naam userReducer hai to sbse phle usko humlog import krenge then whi name hum log reducer mai likh (render /import) kr denge
})
export default appStore;