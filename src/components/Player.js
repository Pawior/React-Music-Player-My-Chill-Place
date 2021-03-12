import React, { useRef, useState, useEffect, audioRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

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
}) => {
  // useEffect(() => {
  //   const audiooo = document.querySelector(".audiooo");
  //   const current = audiooo.currentTime;
  //   const duration = audiooo.duration;
  //   audiooo.addEventListener(
  //     "canplaythrough",
  //     function () {
  //       alert("ended");
  //       console.log("JUPII");
  //       setSongInfo({
  //         ...songInfo,
  //         currentTime: currentSong.audio.currentTime,
  //         duration: currentSong.audio.duration,
  //       });
  //       console.log(songInfo);
  //     },
  //     false
  //   );
  //   console.log(audiooo);
  // }, []);

  // State

  // Functions
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
  };
  const musicBack = () => {
    let i = musicIdentifier();
    if (i <= 0) {
      i = 3;
    }
    setCurrentSong(songs[(i -= 1)]);
  };
  //useRef

  const playSongHandler = () => {
    // if (audioRef.current.paused == false) {          ROZWIĄZANIE BARDZIEJ JS XD
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }
    //                          ROZWIĄZANIE BARDZIEJ REACT
    if (isPlaying) {
      audioRef.current.pause();
      setisPlaying(!isPlaying);
    } else {
      audioRef.current.play();
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
  // const getDuration = () => {
  //   if (audioRef.current != null) return audioRef.current.duration;
  // };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>

        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        ></input>
        <p> {getTime(songInfo.duration)}</p>
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
