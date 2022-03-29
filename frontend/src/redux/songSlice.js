import {createSlice} from '@reduxjs/toolkit'

const songSlice = createSlice({
    name: 'song',
    initialState:{
        song:{
            currentSong: null,
            isFetching: false,
            error: false
        },
        listSong:{
            isFetching: false,
            songs:null,
            error: false
        }
    },
    reducers:{
        addStart: (state) => {
            state.song.isFetching = true
        },
        addSuccess: (state, action) => {
            state.song.isFetching = false
            state.song.currentSong = action.payload
            state.song.error = false
        },
        addFailed: (state) => {
            state.song.isFetching = false
            state.song.error = true
        },
        getStart: (state) => {
            state.listSong.isFetching = true
        },
        getSuccess: (state, action) => {
            state.listSong.isFetching = false
            state.listSong.songs = action.payload
            state.listSong.error = false
        },
        getFailed: (state) => {
            state.listSong.isFetching = false
            state.listSong.error = true
        }
    }
})

export const {addStart, addFailed, addSuccess, getStart, getSuccess, getFailed} = songSlice.actions
export default songSlice.reducer