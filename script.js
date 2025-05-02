// This is the JavaScript file for the music player app
// It contains the logic for playing, pausing, and skipping songs
// Beginning with the given JavaScript code

let songs = [

    {
   
    title: "Blinding Lights",
   
    artist: "The Weeknd",
   
    duration: "3:20",
   
    liked: true,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d6/87/41/d687410c-4714-af1d-e055-3296d4777226/mzaf_3899967882325561494.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Levitating",
   
    artist: "Dua Lipa",
   
    duration: "3:23",
   
    liked: false,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/13/da/f4/13daf417-4af6-9c03-4bd7-ba42bb8c878e/mzaf_14497502351802974104.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/9c/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Don't Start Now",
   
    artist: "Dua Lipa",
   
    duration: "3:03",
   
    liked: true,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/01/55/e1/0155e17e-3b4e-734d-126d-7c68855334c4/mzaf_921296087409308691.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/ee/66/41ee66fa-f8dd-7e82-155a-3a1b360dc562/190295322175.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Watermelon Sugar",
   
    artist: "Harry Styles",
   
    duration: "2:54",
   
    liked: false,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/16/86/f5/1686f50d-8b77-7e32-85f7-5f0e804d68fe/mzaf_1581096760438104595.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Circles",
   
    artist: "Post Malone",
   
    duration: "3:35",
   
    liked: true,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/fb/e6/78fbe613-9e1c-6a99-aa7d-fe8b1ec2a971/mzaf_12103026775056031014.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/97/e6/11/97e6112a-c6bb-81d6-9364-373627df6a83/artwork.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Adore You",
   
    artist: "Harry Styles",
   
    duration: "3:27",
   
    liked: false,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/59/1f/1b591fec-7157-f069-02fd-46a77c8638af/mzaf_15227483119872129084.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Savage Love",
   
    artist: "Jason Derulo",
   
    duration: "2:51",
   
    liked: true,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c23e82/mzaf_17378892637379859434.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/6a/31/b86a31f3-56a3-9e69-7159-0a44cd3b6b6c/886448554769.jpg/100x100bb.jpg",
   
    },
   
    {
   
    title: "Rockstar",
   
    artist: "DaBaby feat. Roddy Ricch",
   
    duration: "3:01",
   
    liked: false,
   
    audio:
   
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1d/e9/82/1de9827e-fc29-f852-a51b-356d7144e31a/mzaf_14736250221907049031.plus.aac.ep.m4a",
   
    image:
   
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/53/0e/d0/530ed031-316d-a32b-d603-c11af9ad235d/20UMGIM28169.rgb.jpg/100x100bb.jpg",
   
    },
   
   ];
   // Lets begin
   // 1. Loop through the songs array
   let playlist = document.getElementById("playlist");

   // 2. make a loopthrough each song in the songs array

    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];
        // 3. Create a new div element for each song
        let songDiv = document.createElement("div");
        songDiv.className = "song";
        // 4. Set the inner HTML of the div to include the song title, artist, and duration
        songDiv.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p>${song.duration}</p>
            <button class="play-button" data-audio="${song.audio}">Play</button>
            <button class="like-button" data-liked="${song.liked}">${song.liked ? "★" : "☆"}</button>
        `;
        // 5. Append the div to the playlist
        playlist.appendChild(songDiv);
    }


   // <p> with favorite icon is a star icon
   // <p> if favorite is true, show the star icon, else show the empty star icon
   // 6. Add event listeners to the play buttons
    let playButtons = document.querySelectorAll(".play-button");
    playButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let audioSrc = event.target.getAttribute("data-audio");
            let audio = new Audio(audioSrc);
            audio.play();
        });
    });
   // 7. Add event listeners to the like buttons
    let likeButtons = document.querySelectorAll(".like-button");
    likeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let liked = event.target.getAttribute("data-liked") === "true";
            liked = !liked;
            event.target.setAttribute("data-liked", liked);
            event.target.innerText = liked ? "★" : "☆";
        });
    });
    
