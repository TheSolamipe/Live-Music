//want to play music on the site
var songs = ["Audio/solo.mp3", "Audio/final.mp3", "Audio/dtd.mp3", "Audio/hero.mp3", "Audio/naija.mp3", "Audio/Tems.mp3", "Audio/Grow.mp3"];
var song = new Audio(); //calling the in-built audio method

// getting the play buttons to be clicked from html
var plays1 =document.getElementById("play1");
var plays2 =document.getElementById("play2");
var plays3 =document.getElementById("play3");
var plays4 =document.getElementById("play4");
var plays5 =document.getElementById("play5");
var plays6 =document.getElementById("play6");
var plays7 =document.getElementById("play7");
//creating a plays array for all the play buttons
var plays = ["plays1", "plays2", "plays3", "plays4", "plays5", "plays6", "plays7"];
//calling the fillbars for each progress bar

var fillBar = [];
fillBar[0] = document.getElementById('fill1');
fillBar[1] = document.getElementById('fill2');
fillBar[2] = document.getElementById('fill3');
fillBar[3] = document.getElementById('fill4');
fillBar[4] = document.getElementById('fill5');
fillBar[5] = document.getElementById('fill6');
fillBar[6] = document.getElementById('fill7');

  //creating and assigning a function that sources and plays the song when the button is clicked.
//plays1.onclick = playSong1; //plays song when you click the play button
playSong = function(songindex){
  // indicates the progress of the Music
  let songfillbar = function() {
    var position = song.currentTime / song.duration; //calculates position of fillbar
    fillBar[songindex].style.width = position * 100 +'%';
  }
  song.removeEventListener('timeupdate', songfillbar, false);
  song.src = songs[songindex];
  song.play(); //using the in-built play method to play the song

   song.addEventListener('timeupdate', songfillbar, false);

   //changing play button to pause for pausing music after its being played
   /*function playOrPauseSong(){
       if(song.paused){
         song.play();
         $("#play1#img").attr("src","images/pause.png");
       }
       else{
         song.pause();
         $("#play1#img").attr("src","images/you.png") ;
       }
   }
   */
  }

//calling an element from html and assigning it to a variable
var botn = document.getElementById("bot");
//assigning an event listener to the button called from the webpage
botn.onclick = email;
//creating an email array
var emailList = [];
//complex regular expressions testing if email matches accepted pattern
var acceptedPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,7}$/;

function email(){
  prompt("enter you email address");//asking user for email address
  if (email == acceptedPattern) {
    emailList = email;
    alert("Thank you , looking forward to serving you better");
  }
  else {
    alert("check your email address");
  }
}
/* observing the progress of the Music
 song.addEventListener('timeupdate', function(){
   if (plays1.click) {
     var position = song.currentTime / song.duration;
     fillBar1.style.width = position * 100 +'%';
   }else if (plays2.click) {
     var position = song.currentTime / song.duration;
     fillBar2.style.width = position * 100 +'%';
   }
 });*/
