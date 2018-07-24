$(document).ready(function() {

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_2",
        cssSelectorAncestor: "#jp_container_2"
    }, [{
            number: '1',
            artist: "Buleria",
            cover: "images/covers/cover-gio.jpg",
            title: "Djis un biaha mas",
            mp3: "https://fruzitimeradio.com/images/audio/michael/Bad.mp3",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            number: '2',
            artist: "Gio Fuertisimo",
            cover: "images/covers/cover-gio.jpg",
            title: "Biba Bai Laga Nan (LIVE)",
            mp3: "https://fruzitimeradio.com/images/audio/michael/Bad.mp3",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        },
        {
            number: '3',
            artist: "Menasa",
            cover: "images/covers/cover-3.jpg",
            title: "Tur hende hisa man",
            m4a: "https://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
            oga: "https://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
        },
        {
            number: '4',
            artist: "Gentz",
            cover: "images/covers/cover-gio.jpg",
            title: "Skonde Pa Amor",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
        },
        {
            number: '5',
            artist: "Dolce",
            cover: "images/covers/cover-gio.jpg",
            title: "Tation partiendo mel eu",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
        },
        {
            number: '6',
            artist: "Hype",
            cover: "images/covers/cover-gio.jpg",
            title: "Donec eu tincidunt ligula",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            number: '7',
            artist: " Ephrem J",
            cover: "images/covers/cover-gio.jpg",
            title: "Vestibulum ante ipsum primis",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        },
        {
            number: '8',
            artist: "Menasa",
            cover: "images/covers/cover-3.jpg",
            title: "Etiam tempor erat ut",
            m4a: "https://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
            oga: "https://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
        },
        {
            number: '9',
            artist: "Brian D",
            cover: "images/covers/cover-4.jpg",
            title: "Idea",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
        },
        {
            number: '10',
            artist: "Buleria",
            cover: "images/covers/cover-5.jpg",
            title: "Tation partiendo mel eu",
            m4a: "https://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
            oga: "https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
        }

    ], {
        swfPath: "jplayer",
        supplied: "m4a,mp3,oga",
        wmode: "window",
        globalVolume: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });


})