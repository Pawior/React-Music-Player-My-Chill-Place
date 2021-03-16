import React, { useRef, useState, useEffect, audioRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../utility.js";
const Player = ({
  songInfo,
  setSongInfo,
  currentSong,
  setCurrentSong,
  songs,
  isPlaying,
  setisPlaying,
  audioRef,
  volume,
  setVolume,
  setSongs,
  songEnd,
  setSongEnd,
}) => {
  // Functions
  const startMusic = () => {
    return playAudio(isPlaying, audioRef);
  };
  const musicIdentifier = () => {
    function findIt(element) {
      return element.id == currentSong.id;
    }
    let i = songs.findIndex(findIt);
    return i;
  };
  const musicForward = () => {
    let i = musicIdentifier();
    if (i >= songs.length - 1) {
      i = -1;
    }
    setCurrentSong(songs[(i += 1)]);
    playAudio(isPlaying, audioRef);
    songs.forEach((item) => (item.active = false));
    songs[i].active = true;
  };
  const musicBack = () => {
    let i = musicIdentifier();
    if (i <= 0) {
      i = songs.length;
    }
    setCurrentSong(songs[(i -= 1)]);
    playAudio(isPlaying, audioRef);

    songs.forEach((item) => (item.active = false));
    songs[i].active = true;
  };

  const playSongHandler = () => {
    // if (audioRef.current.paused == false) {          ROZWIĄZANIE BARDZIEJ JS
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }
    //                          ROZWIĄZANIE BARDZIEJ REACT
    if (isPlaying) {
      audioRef.current.pause();
      setisPlaying(!isPlaying);
    } else {
      var playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch((error) => {});
      }
      setisPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    console.log(e.target.value);
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const [iconInfo, setIconInfo] = useState(faPlay);
  const iconChanger = () => {
    if (iconInfo == faPlay) {
      setIconInfo(faPause);
    } else {
      setIconInfo(faPlay);
    }

    console.log("icon click");
  };
  const volumeHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(audioRef.current.volume);
    audioRef.current.volume = e.target.value / 100;
    setVolume(audioRef.current.volume * 100);
  };
  const volumeReturn = () => {
    return audioRef.current.volume;
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            className="volumeChangeInput"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          ></input>
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p> {songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={musicBack}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="play"
          onClick={iconChanger}
          icon={isPlaying ? faPause : faPlay}
          onClick={() => {
            playSongHandler();
            iconChanger();
          }}
          size="2x"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={musicForward}
        ></FontAwesomeIcon>
      </div>
      <div className="volume">
        <FontAwesomeIcon icon={faVolumeDown} size="2x">
          {" "}
        </FontAwesomeIcon>
        <input
          className="volumeRange"
          min={0}
          max={100}
          type="range"
          onChange={volumeHandler}
          value={volume}
        ></input>
      </div>
    </div>
  );
};
export default Player;
