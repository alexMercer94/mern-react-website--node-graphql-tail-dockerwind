import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './type';

const initialState: IHomePageState = {
    topCars: [],
};

export const homePageSlice = createSlice({
    name: 'homePgae',
    initialState,
    reducers: {
        setTopCars: (state, action) => {
            state.topCars = action.payload;
        },
    },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
