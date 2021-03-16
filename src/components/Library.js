import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setisPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2 class="libraryTheName"> Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            setisPlaying={setisPlaying}
            setSongs={setSongs}
          ></LibrarySong>
        ))}
      </div>
    </div>
  );
};
export default Library;
