import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      {/* <a href="#">
        {" "}
        <img alt="test" src={currentSong.cover}>
          {" "}
        </img>{" "}
      </a> */}
      <img alt="test" src={currentSong.cover} />

      <h2> {currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
