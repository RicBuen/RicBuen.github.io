var i = 0;
var j = 0;

function changeDescription()
{
   var descriptions = ["I am a web developer", "I am an app developer", "I am a database administrator", "I am a freelancer"];

   var descriptionheading = document.getElementById("description");
   var welcomepage = document.getElementById("welcomepage");

   welcomepage.style.color = "white";
   descriptionheading.innerHTML = descriptions[i];

   i = (i + 1) % descriptions.length;
}

function changeBackgroundImg()
{
   var backgroundimgs = ["backgroundpics/webdeveloper.jpg", "backgroundpics/appdeveloper.png", "backgroundpics/databaseadmin.jpg", "backgroundpics/freelancer.jpg"];

   var mainbackground = document.getElementById("mainbackground");

   mainbackground.style.backgroundImage = "url('"+ backgroundimgs[j] +"')";
   mainbackground.style.backgroundRepeat = "no-repeat";
   mainbackground.style.backgroundSize = "cover";

   j = (j + 1) % backgroundimgs.length;
}

//Change the background and descriptions every 3 seconds
setInterval(changeDescription, 3000);
setInterval(changeBackgroundImg, 3000);
