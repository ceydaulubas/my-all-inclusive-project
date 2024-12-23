import { configureStore } from '@reduxjs/toolkit';
import { navbarPopupSlice } from './navbarPopup/navbarPopupSlice';
import { quoteSlice } from './quoteSlice';
import pillListReducer from './pillListSlice';

export const store = configureStore({
    reducer: {
        navbarPopup: navbarPopupSlice.reducer,
        quote: quoteSlice.reducer,
        pillList: pillListReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
