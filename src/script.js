const SLIDESHOW_TIMEOUT = 7000;
const MUTE_ICON_SOURCE = "./assets/mute.png" 
const UNMUTE_ICON_SOURCE = "./assets/unmute.png" 
const WEDDING_DATE = "Jul 20, 2024 18:00:00 +02:00GMT";
let slideIndex = 1;
let audioPlayerInterval;
let muted = false;
const audio = new Audio('./assets/wedding-theme.mp3');
let itemsToLoad = [];

var countdownInterval = setInterval(()=>getCountDown(), 1000);

function showSlides() {
  setTimeout(() => {
    let i;
    let slides = document.getElementsByClassName("background");
    for (i = 0; i < slides.length ; i++) {
      slides[i].className = "background fade";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
      {slides[slideIndex-1].className = "background show";
    }
    showSlides() // Change image every 2 seconds
  }, SLIDESHOW_TIMEOUT);
}

function initializeCarousel () {
    $(".owl-carousel").owlCarousel({
        loop:false,
        margin:0 ,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    });
}


const handleAudioPlayer = () => {
    audioPlayerInterval = setInterval(()=>{
        try{
            audio.volume=.2;
            audio.play();
          }catch(e){
            
          }
    }, 2000)
}

function setReadyWhenLoaded (index) {
    console.log(index, ' loaded');

}


$(document).ready(function(){
    itemsToLoad = document.getElementsByTagName('img')
    console.log(itemsToLoad);
    
    for(var i =0; i<itemsToLoad.length;i++)
    {
        itemsToLoad[i].setAttribute('onload', 'setReadyWhenLoaded('+i+')')
    }
    itemsToLoad=new Array(itemsToLoad.length).fill(false)
    console.log(itemsToLoad);
    showSlides();
    initializeCarousel();
    getCountDown();
    handleAudioPlayer()
;
  });



// Set the date we're counting down to
var countDownDate = new Date(WEDDING_DATE).getTime();

function getCountDown (){
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("item-1").innerHTML = "Bro foot hdar l 3eres minou heda li hal2ad ma 3endo hayet la hatta 3am befout 3al cart hala2??????????";
      document.getElementById("item-1").className = "bahdale";
    }
}
// window.onload = getCountDown;
// Update the count down every 1 second


const openByblosPalace = () => {
    window.open("https://www.google.com/maps/place/Byblos+Palace/@34.1076133,35.6522557,15z/data=!4m2!3m1!1s0x0:0xd5fce4f2b1bca3c?sa=X&ved=1t:2428&ictx=111")
}

const openChurchLocation = () => {
    window.open("https://www.google.com/maps/place/Church+Of+Mar+Gerges+Tartej/@34.1827429,35.822034,17z/data=!3m1!4b1!4m6!3m5!1s0x151f56777d4e0acb:0xccf9d6303244ab6b!8m2!3d34.1827385!4d35.8246089!16s%2Fg%2F11f04320tf?entry=ttu")
}


function handleMuteUnmute () {
    if(muted) {
        document.getElementById("sound-icon").setAttribute("src", MUTE_ICON_SOURCE);}
    else document.getElementById("sound-icon").setAttribute("src", UNMUTE_ICON_SOURCE);
    muted= !muted;
    audio.muted=muted
}