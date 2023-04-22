import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { tmdAPI } from '~/configApi';

const initialState = JSON.parse(localStorage.getItem('queue_nowplay')) || {
    currentEncodeId: '',
    playlistEncodeId: '',
    listSong: [],
    infoSongCurrent: {},
    duration: 0,
    currentTime: 0,
    currentIndexSong: 0,
    infoCurrentMV: {},
    infoCurrenAlbum: {},
    loading: false,
    infoSongNext: {},
    listSongShuffte: [],
};

const fetchPlayList = createAsyncThunk('queueNowPlay/fetchPlayList', async (id) => {
    const res = await axios.get(tmdAPI.getAlumPage(id));
    return res.data.data;
});

export const queueNowPlay = createSlice({
    name: 'queueNowPlay',
    initialState,
    reducers: {
        playSongNotAlbum: (state, action) => {
            state.infoCurrenAlbum = [];
            state.listSong = [action.payload];
            state.currentTime = 0;
            state.currentIndexSong = 0;
            state.playlistEncodeId = false;
            state.infoSongCurrent = state.listSong[state.currentIndexSong];
            state.infoSongNext = {};
            state.currentEncodeId = action.payload.encodeId;
            state.duration = action.payload.duration;
            state.listSongShuffte = [];

            localStorage.setItem('queue_nowplay', JSON.stringify(state));
        },

        removeList: (state) => {
            state.currentEncodeId = '';
            state.playlistEncodeId = '';
            state.listSong = [];
            state.listSongShuffle = [];
            state.infoCurrenAlbum = {};
            state.currentIndexSong = 0;
            state.infoSongCurrent = {};
            state.infoSongNext = {};
            state.duration = 0;
            state.currentTime = 0;
            state.infoCurrentMv = {};
            state.loading = false;
            localStorage.setItem('queue_nowplay', JSON.stringify(state));
        },

        setCurrentIndexSong: (state, action) => {
            if (action.payload !== -1) {
                state.currentIndexSong = action.payload;
                localStorage.setItem('queue_nowplay', JSON.stringify(state));
            }
        },

        setListSong: (state, action) => {
            state.listSong = action.payload;
            localStorage.setItem('queue_nowplay', JSON.stringify(state));
        },
    },

    extraReducers: (builer) => {
        builer.addCase(fetchPlayList.pending, (state) => {
            state.loading = true;
        });

        builer.addCase(fetchPlayList.rejected, (state) => {
            state.loading = false;
        });
        builer.addCase(fetchPlayList.fulfilled, (state, action) => {
            state.listSong = action.payload.song.items.filter((e) => e.streamingStatus === 1);
            state.loading = false;
            state.currentIndexSong = 0;
            state.currentTime = 0;
            state.infoSongCurrent = state.listSong[state.currentIndexSong];
            localStorage.setItem('queue_nowplay', JSON.stringify(state));
        });
    },
});

export const { playSongNotAlbum, setCurrentIndexSong, setListSong, removeList } = queueNowPlay.actions;

export default queueNowPlay.reducer;
export { fetchPlayList };
