// using interface with methods
interface Song {
  songName: string;
  artist: string;
  printSongInfo(songName: string, artist: string): string;
}
const song1: Song = {
  songName: "westVirginia",
  artist: "JohnDenver",
  printSongInfo: (songName: any, artist: any) => {
    return `Song: ${songName}, Artist: ${artist}`;
  },
};
console.log(song1.printSongInfo("westVirginia", "JohnDenver"));
