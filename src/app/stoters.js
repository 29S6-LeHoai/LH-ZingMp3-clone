import { configureStore } from '@reduxjs/toolkit';
import { queueNowPlay, toggleOpenMain, setting } from '~/features';
export const store = configureStore({
    reducer: {
        toggleOpenMain: toggleOpenMain,
        queueNowPlay: queueNowPlay,
        setting: setting,
    },
});
