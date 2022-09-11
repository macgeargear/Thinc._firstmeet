interface Song {
    name: string;
    artist: string;
    year?: number;
}

let song1: Song = {
    name: "Sometimes",
    artist: "Chelsea Culter",
    year: 2019
}

let song2: Song = {
    name: "Scared",
    artist: "Jeremy Zucker"
}

function showInfo(song: Song): void {
    let text: string = `${song.name} by ${song.artist}`
    if (typeof song.year != "undefined")
        text += `(${song.year})`
    console.log(text)
}

showInfo(song1)
showInfo(song2)
showInfo({
    name: "If You See Her",
    artist: "LANY",
    year: 2561
})
