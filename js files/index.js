$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function loadIntrotext()
{
   $(document).ready(function(){
     $("#firstPara").fadeIn();
     $("#firstPara").animate({fontSize: '2em'});
     $("#secondPara").delay(2000).fadeIn();
   });
}

function loadBeginning()
{
   var myIndex = 0;
   slideshow();

   function slideshow()
   {
      var i;
      var x = document.getElementsByClassName("slideshow_element");

      for(i = 0; i < x.length; i++)
      {
         x[i].style.display = "none";
      }
      myIndex++;

      if(myIndex > x.length)
      {
         myIndex = 1;
      }
      x[myIndex-1].style.display = "initial";
      setTimeout(slideshow, 4000);
   }
}
