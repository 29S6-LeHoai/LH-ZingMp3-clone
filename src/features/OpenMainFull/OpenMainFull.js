import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    isOpen: true,
    isOpenClass: false,
};

export const toggleOpenMain = createSlice({
    name: 'toggleOpenMain',
    initialState,
    reducers: {
        setOpenMain: (state) => {
            state.isOpen = true;
        },
        setOffMain: (state) => {
            state.isOpen = false;
        },
        setOpenClass: (state) => {
            state.isOpenClass = true;
        },
        setOffClass: (state) => {
            state.isOpenClass = false;
        },
    },
});

export const { setOffClass, setOffMain, setOpenClass, setOpenMain } = toggleOpenMain.actions;

export default toggleOpenMain.reducer;
