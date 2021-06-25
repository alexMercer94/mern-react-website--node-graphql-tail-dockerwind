import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reduxtLogger from 'redux-logger';
import homePageReducer from './containers/HomePage/slice';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxtLogger),
    reducer: {
        homePage: homePageReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
