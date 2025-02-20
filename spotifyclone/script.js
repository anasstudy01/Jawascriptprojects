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

const playMusic = (songname, pause = false) => {
  // get the song
  currentsong.src = "/songs/" + songname;
  
  // If not paused, play the song immediately
  if (!pause) {
    currentsong.play();
    document.getElementById("play").src = "pause.svg";
  } else {
    document.getElementById("play").src = "play.svg";
  }
  
  document.querySelector(".songsinfo").innerHTML = decodeURI(songname);
  document.querySelector(".songstime").innerHTML = "00:00 / 00:00";
  console.log("the song is " + songname);
};


async function main() {
  // get the list of all song
  const songs = await getsongs();

//Autoplay the first song
  playMusic((songs[0]),true);


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



// listen for time update

currentsong.addEventListener("timeupdate", () => {
  // update the time
  let currenttime = currentsong.currentTime;
  let duration = currentsong.duration;
  document.querySelector(".songstime").innerHTML =
    Math.floor(currenttime / 60) +
    ":" +
    Math.floor(currenttime % 60) +
    " / " +
    Math.floor(duration / 60) +
    ":" +
    Math.floor(duration % 60);
});


//seekbar functionality

}  


// call the main function
main();
