console.log("hii start the code");
let currentsong = new Audio();

async function getsongs() {
  console.log("hii start the code");
  const a = await fetch("http://127.0.0.1:5500/songs/");
  const response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  // console.log(tds);
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

const playMusic = async (songname) => {
  // get the song
  // let audio = new Audio("/songs/"+ songname);
  currentsong.src = "/songs/" + songname;
  currentsong.play();
  document.querySelector(".songsinfo").innerHTML = songname;
  document.querySelector(".songstime").innerHTML = "00:00 / 00:00";
  console.log("the song is " +songname);
  play.src = "pause.svg";
};

async function main() {
  // get the list of all song
  const songs = await getsongs();
  console.log(songs);

  // adding songs to  the  .songslist
  let songsUL = document
    .querySelector(".songslist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songsUL.innerHTML =
      songsUL.innerHTML +
      `<li>
         
                <img class="invert" src="music.svg" alt="music" />
                <div class="info">
                  <div class="songname">${song.replaceAll("%20", " ")}</div>
                  <div class="artist">anas</div>
                </div>
                <div class="playnow">
                  <span>play now</span>
                  <img class="invert" src="play.svg" alt="play" />
                </div>
              
        </li>`;

    // attach an event listener to each songs
    Array.from(
      document.querySelector(".songslist").getElementsByTagName("li")
    ).forEach((e) => {
      // console.log(e.getElementsByTagName("div")[0].innerText); print both song name and artist
      e.addEventListener("click", () => {
        console.log(e.querySelector("div.songname").innerText);
        // play the song
        playMusic(e.querySelector("div.songname").innerText);
      });
    });
  }

  //play the fist song
  //   var audio = new Audio(songs[0]);
  // audio.play();

  // audio.addEventListener("loadeddata", () => {
  //   //   let duration=audio.duration;
  //   //     console.log(duration);
  //   console.log(audio.duration, audio.currentSrc, audio.currentTime);
  // });

//adding event listener to play and pause button
play.addEventListener("click", () => {
  if (currentsong.paused) {
    currentsong.play();
    play.src = "pause.svg";
  } else {
    currentsong.pause();
    play.src = "play.svg";
  }
});

}

main();
