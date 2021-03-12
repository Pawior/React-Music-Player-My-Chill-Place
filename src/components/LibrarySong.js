import React from "react";
import { playAudio } from "../utility";
const LibrarySong = ({
  song,
  songs,
  currentSong,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setisPlaying,
  setSongs,
}) => {
  const songPicker = () => {
    // function findIt(element) {                   ALTERNATYWNA METEODA XDDDD tylko parę linii więcej
    //   return element.id == song.id;
    // }
    // let i = songs.findIndex(findIt);
    // setCurrentSong(songs[2]);
    // console.log(i);
    // setCurrentSong(songs[i]);
    // 2 metoda
    // const selectedSong = songs.filter((item) => item.id === id);
    // console.log(selectedSong[0]);
    // setCurrentSong(selectedSong[0]);
    //3 metoda

    setCurrentSong(song);
    playAudio(isPlaying, audioRef);

    // Podświetlenie piosenki w bibliotece po kliknieciu
    // const newSongs = songs.map((song) => {           SPOSÓB TEGO DEBILA
    //   if (song.id === id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   } else {
    //     return {
    //       ...song,
    //       active: false,
    //     };
    //   }
    // });
    // setSongs(newSongs);
    // II metoda - moja
    songs.forEach((item) => (item.active = false)); //MÓJ SPOSÓB
    song.active = true;
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songPicker}
    >
      <img alt="test" src={song.cover} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
