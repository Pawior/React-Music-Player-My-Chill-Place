import React, { useState, useRef } from "react";
import "./styles/app.scss";
//Ading components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";
function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Ref
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(100);
  const [sleepMenu, setSleepMenu] = useState(false);

  const songEnd = async () => {
    function findIt(element) {
      return element.id == currentSong.id;
    }
    let i = songs.findIndex(findIt);
    await setCurrentSong(songs[(i + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log(animation);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <div className="All">
        {" "}
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
          sleepMenu={sleepMenu}
          setSleepMenu={setSleepMenu}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          setisPlaying={setisPlaying}
        >
          {" "}
        </Nav>
        <Song currentSong={currentSong}> </Song>
        <Player
          currentSong={currentSong}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setisPlaying={setisPlaying}
          audioRef={audioRef}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          volume={volume}
          setVolume={setVolume}
          setSongs={setSongs}
        >
          {" "}
        </Player>
      </div>
      <div className="OnlyLibrary">
        <Library
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setisPlaying={setisPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        ></Library>
      </div>

      <audio
        class="audiooo"
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        volume={volume}
        src={currentSong.audio}
        onEnded={songEnd}
      ></audio>
    </div>
  );
}

export default App;
