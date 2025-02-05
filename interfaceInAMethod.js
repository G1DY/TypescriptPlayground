"use strict";
const song1 = {
    songName: "westVirginia",
    artist: "JohnDenver",
    printSongInfo: (songName, artist) => {
        return `Song: ${songName}, Artist: ${artist}`;
    },
};
console.log(song1.printSongInfo("westVirginia", "JohnDenver"));
