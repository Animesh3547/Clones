console.log("hi script.js");

document.getElementById("toggle-left").onclick = function () {
  document.querySelector(".left").classList.toggle("hide-left");
};
async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/Songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}
async function main() {
  // get the links (href) of all songs in a list
  let songs = await getSongs();
  console.log(songs);
  // play the songs
  var audio = new Audio(songs[18]);
  audio.play();
  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
    // the duration var now holds the duration ( in seconds ) of the audio clip
  });
}
main();
