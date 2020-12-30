import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
      {title: 'Ilamai itho itho', duration: '4:10'},
      {title: 'Thee Thee Thee', duration: '5:10'},
      {title: 'I am a disco dancer', duration: '3:02'},
      {title: 'Maanoothu Manthayila', duration: '2:14'},
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
