$(document).ready(function(){
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
  });
// Set the date we're counting down to
var countDownDate = new Date("Jul 20, 2024 18:00:00 +02:00GMT").getTime();

function getCountDown (){
    var now = new Date().getTime();
console.log('updating')
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
      clearInterval(x);
      document.getElementById("demo").innerHTML = "CONGRATULATIONS";
    }
}
window.onload = getCountDown;
// Update the count down every 1 second
var x = setInterval(()=>getCountDown(), 1000);


const openByblosPalace = () => {
    window.open("https://www.google.com/maps/place/Byblos+Palace/@34.1076133,35.6522557,15z/data=!4m2!3m1!1s0x0:0xd5fce4f2b1bca3c?sa=X&ved=1t:2428&ictx=111")
}

const openChurchLocation = () => {
    window.open("https://www.google.com/maps/place/Church+Of+Mar+Gerges+Tartej/@34.1827429,35.822034,17z/data=!3m1!4b1!4m6!3m5!1s0x151f56777d4e0acb:0xccf9d6303244ab6b!8m2!3d34.1827385!4d35.8246089!16s%2Fg%2F11f04320tf?entry=ttu")
}
