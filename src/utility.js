export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then((audio) => {
          audioRef.current.play();
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  }
};
