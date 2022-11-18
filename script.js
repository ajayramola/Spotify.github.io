console.log("Welcome to Spotify");
//initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Bol Heera Bol", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "chalpatti", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "mari jogyani", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Let me Love you", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Peg Day", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "GOAT", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Ali Baba ", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "cheap thrills", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "chla bhi motor", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "chitta Kurta", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Putt jatt Da", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Sia-unstoppable", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Yaar Khade Ne", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "hiya taro mejata", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Born To  shine ", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: " Title", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: " Title", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},


]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
  
  //update seekbar
  progress= parseInt((audioElement.currentTime/audioElement.duration ) * 100);
 
  myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
    
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex +1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex =0
}
else{
    songIndex +=1;

}
        audioElement.src=`songs/${songIndex +1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex =0
}
else{
    songIndex -=1;

}
        audioElement.src=`songs/${songIndex +1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})