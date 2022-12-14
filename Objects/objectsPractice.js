
const Radio = {
    stations: 
    [
        {
            name: 1,
            songs: 
                [
                    {artist: "Marlo",
                        title: "Lighter than air",
                    },
                    {artist:"Tiesto",
                        title: "Silence",
                    },
                    {artist:"Avicii",
                        title: "Rapture",
                    },
                ]
        }, 
        {
            name: 2,   
            song: 
            [
                {artist: "Lady Gaga",
                    title: "Poker Face",
                },
                {artist:"Rihanna",
                    title: "Diamonds",
                },
                {artist:"Katy Perry",
                    title: "Fireworks",
                },
            ]
        }, 
        {
            name: 3,
            songs: 
            [
                {artist: "Kanye West",
                    title: "Flashing Lights",
                },
                {artist:"50 Cent",
                    title: "In Da Club",
                },
                {artist:"The Notorious B.I.G",
                    title: "Big Poppa",
                },
            ],     
        },
    ],
    randomStation(){
        let stationIndex=Math.floor(Math.random()*3)
        let songsIndex=Math.floor(Math.random()*3)
        let newSong = Radio.stations[stationIndex].songs[songsIndex]
        console.log("Now Playing: " + newSong.title + " by " + newSong.artist)
    },

}

Radio.randomStation()