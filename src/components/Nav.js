import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryStatus,
  setLibraryStatus,
  sleepMenu,
  setSleepMenu,
  setisPlaying,
  audioRef,
}) => {
  const showSleepMenu = () => {
    setSleepMenu(!sleepMenu);
  };

  const setSleep = (time) => {
    setTimeout(() => {
      audioRef.current.pause();
      setisPlaying(false);
    }, time * 1000);
  };
  return (
    <nav>
      <h1> My Chill Place </h1>
      <div class="navigation">
        <button
          className="libraryBtn"
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          {" "}
          Library <FontAwesomeIcon icon={faMusic}> </FontAwesomeIcon>{" "}
        </button>
        <button onClick={showSleepMenu}>
          {" "}
          Sleep <FontAwesomeIcon icon={faMoon}> </FontAwesomeIcon>
        </button>
        <div className={`navMenu ${sleepMenu ? "active-sleepMenu" : ""}`}>
          <button
            className="sleepTime"
            onClick={() => {
              setSleep(5);
            }}
          >
            {" "}
            5 sec
          </button>
          <button
            className="sleepTime"
            onClick={() => {
              setSleep(900);
            }}
          >
            {" "}
            15 min
          </button>
          <button
            className="sleepTime"
            onClick={() => {
              setSleep(1800);
            }}
          >
            {" "}
            30 min
          </button>
          <button
            className="sleepTime"
            onClick={() => {
              setSleep(2700);
            }}
          >
            {" "}
            45 min
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
