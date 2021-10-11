console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Neffex- Cold", filePath: "./1.mp3", coverPath: "./1.jpg"},
    {songName: "Neffex- Best of me", filePath: "./2.mp3", coverPath: "./2.jfif"},
    {songName: "Neffex - Grateful", filePath: "./3.mp3", coverPath: "./3.jfif"},
    {songName: "Tones and I - Dance Monkey", filePath: "./4.mp3", coverPath: "./4.jfif"},
    {songName: "The Chainsmoker Closer ", filePath: "./5.mp3", coverPath: "./5.jfif"},
    {songName: "Maroon 5  Memories ", filePath: "./6.mp3", coverPath: "./6.jfif"},
    {songName: "Alan Walker - Faded", filePath: "./7.mp3", coverPath: "./7.jfif"},
    {songName: "Alan Walker & K-391 - Ignite ", filePath: "./8.mp3", coverPath: "./8.jfif"},
    {songName: "Alan Walker, Sabrina Carpenter", filePath: "./9.mp3", coverPath: "./9.jfif"},
    {songName: "Alan-Walker-K-391-Tungevaa", filePath: "./10.mp3", coverPath: "./10.jfif"},
    {songName: "Ed Sheeran - Shape of You", filePath: "./11.mp3", coverPath: "./11.jfif"},
    {songName: "Imagine Dragons - Believer ", filePath: "./12.mp3", coverPath: "./12.jfif"},
    {songName: "Alan Walker x salem ilese  Fake A Smile", filePath: "./13.mp3", coverPath: "./13.jfif"},
    {songName: "Ed Sheeran  Justin Bieber  I Dont Care", filePath: "./14.mp3", coverPath: "./14.jfif"},
    {songName: "Ellie Goulding  Love Me Like You Do ", filePath: "./15.mp3", coverPath: "./15.jfif"},
    {songName: "Useless for me", filePath: "./16.mp3", coverPath: "./2.jfif"},
    {songName: "Alan Walker - Alone", filePath: "./17.mp3", coverPath: "./16.jfif"},
    {songName: "Wiz Khalifa  See You Again", filePath: "./18.mp3", coverPath: "./17.jfif"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=18){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})