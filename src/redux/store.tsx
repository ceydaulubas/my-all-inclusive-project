import { configureStore } from "@reduxjs/toolkit";
import { navbarPopupSlice } from "./navbarPopup/navbarPopupSlice";
import { quoteSlice } from "./quoteSlice";
import weatherSlice  from "./weatherSlice";

export const store = configureStore({
    reducer: {
        navbarPopup: navbarPopupSlice.reducer,
        quote: quoteSlice.reducer,
        weather : weatherSlice,
    },
    });


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch