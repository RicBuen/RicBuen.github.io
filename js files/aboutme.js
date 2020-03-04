$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function load_aboutme()
{
   $(document).ready(function(){
     $("#about_me").fadeIn();
     $("#about_me").animate({width: '80%', height: '80%'}, 2000);


     $("#profile_img").delay(3000).fadeIn();
     $("#profile_img").animate({width: '40%', height: 'auto'}, 'slow');

     $("h1").delay(5000).fadeIn();
     $("#para1").delay(6000).fadeIn();
     $("#para2").delay(7000).fadeIn();
   });
}
