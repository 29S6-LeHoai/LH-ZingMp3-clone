import { createSlice } from '@reduxjs/toolkit';

let initialState = JSON.parse(localStorage.getItem('hlmp3_setting')) || {
    isLoop: false,
    isRandom: false,
    autoPlay: false,
    volume: 0.8,
    isVolume: 0.8,
    playing: false,
    muted: false,
    isLoading: false,
    isReady: false,
    isBgFull: false,
    text: 2,
    progressInterval: 500,
    titleKey: 'HL MP3 | Nghe nhạc chát lượng cao trên PC, Mobile và TV',
    clockOff: false,
};

export const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setClockOff: (state, action) => {
            state.clockOff = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setProgressInterval: (state, action) => {
            state.progressInterval = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setIsValume: (state, action) => {
            state.isVolume = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        toggleMuted: (state) => {
            state.muted = !state.muted;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setReady: (state, action) => {
            state.isReady = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setVolume: (state, action) => {
            state.volume = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setRandomSongs: (state, action) => {
            state.isRandom = !state.isRandom;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setLoopSongs: (state) => {
            state.isLoop = !state.isLoop;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setPlay: (state, action) => {
            state.playing = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setPlaying: (state) => {
            state.playing = !state.playing;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setPlayingAction: (state, action) => {
            state.play = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setActionTheme: (state, action) => {
            state.isBgFull = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },

        setSizeText: (state, action) => {
            state.text = action.payload;
            localStorage.setItem('hlmp3_setting', JSON.stringify(state));
        },
    },

    extraReducers: (builer) => {},
});

export const {
    setClockOff,
    setActionTheme,
    setIsValume,
    setLoopSongs,
    setPlay,
    setPlaying,
    setPlayingAction,
    setProgressInterval,
    setRandomSongs,
    setReady,
    setSizeText,
    setVolume,
} = setting.actions;

export default setting.reducer;
