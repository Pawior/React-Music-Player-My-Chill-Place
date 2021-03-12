import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aso, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10547",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Golden",
      cover: "https://i.scdn.co/image/ab67616d0000b273084e106f28b2fdfc8ac25382",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
      color: ["#203150", "#4af76f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hereafter",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
      color: ["#203150", "#4af76f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Holding No Hands",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
      artist: "Psalm Trees",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10547",
      color: ["#203150", "#4af76f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Golden",
      cover: "https://i.scdn.co/image/ab67616d0000b273084e106f28b2fdfc8ac25382",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
      color: ["#203150", "#4af76f"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHop;
