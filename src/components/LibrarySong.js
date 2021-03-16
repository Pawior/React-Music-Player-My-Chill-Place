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
    // function findIt(element) {                   Bardziej JS rozwiązanie
    //   return element.id == song.id;
    // }
    // let i = songs.findIndex(findIt);
    // setCurrentSong(songs[2]);
    // console.log(i);
    // setCurrentSong(songs[i]);
    //2 metoda                                     Bardziej React

    setCurrentSong(song);
    playAudio(isPlaying, audioRef);

    // Podświetlenie piosenki w bibliotece po kliknieciu
    // const newSongs = songs.map((song) => {           Gorszy sposób
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
    // II metoda
    songs.forEach((item) => (item.active = false));
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
