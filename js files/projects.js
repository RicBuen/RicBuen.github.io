function fadeEffect()
{
   $(document).ready(function(){
     $("#projectssection_title").fadeIn(1000);

     $("#webprojects_link").delay(1000).fadeIn(1000);
     $("#appprojects_link").delay(2000).fadeIn(1000);
   });
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function checkos()
{
   var downloadlink = "https://github.com/RicBuen/AnonyMail";
   var downloadBtn = document.getElementById("downloadBtn");

   if(navigator.appVersion.indexOf("Win") != -1)
   {
      downloadBtn.href = downloadlink;
   }
   else if(navigator.appVersion.indexOf("Mac") != -1)
   {
      alert("You are running Mac OS. You cannot download this app!");
   }
   else if(navigator.appVersion.indexOf("X11") != -1)
   {
      alert("You are running UNIX OS. You cannot download this app!");
   }
   else if(navigator.appVersion.indexOf("Linux"))
   {
      alert("You are running Linux OS. You cannot download this app!");
   }
   else
   {
      alert("You are running an unknown OS!");
   }
}

function displayWebProjects()
{
   $(document).ready(function(){
     if($(".app_project_element").is(":visible")) //if there are app projects being currently displayed, hide them
     {
        //hide the app projects list and title
        $(".app_project_element:nth-of-type(1)").fadeOut(1000);
        $("#appproject_title").delay(1000).fadeOut(1000);

        //reveal the web projects list and title
        $("#webproject_title").delay(2000).fadeIn(1000);
        $(".web_project_element:nth-of-type(1)").delay(3000).fadeIn(1000);
        $(".web_project_element:nth-of-type(2)").delay(4000).fadeIn(1000);
     }
     else
     {
        //reveal the web projects list and title
        $("#webproject_title").fadeIn(2000);
        $(".web_project_element:nth-of-type(1)").delay(1000).fadeIn(2000);
        $(".web_project_element:nth-of-type(2)").delay(2000).fadeIn(2000);
     }
   });
}

function displayAppProjects()
{
   $(document).ready(function(){
     if($(".web_project_element").is(":visible")) //if there are web projects being currently displayed, hide them
     {
        //hide the web projects list and title
        $(".web_project_element:nth-of-type(2)").fadeOut(1000);
        $(".web_project_element:nth-of-type(1)").delay(1000).fadeOut(1000);
        $("#webproject_title").delay(2000).fadeOut(1000);

        //reveal the app projects list and title
        $("#appproject_title").delay(3000).fadeIn(1000);
        $(".app_project_element:nth-of-type(1)").delay(4000).fadeIn(1000);
     }
     else
     {
        //reveal the app projects list and title
        $("#appproject_title").fadeIn(1000);
        $(".app_project_element:nth-of-type(1)").delay(1000).fadeIn(2000);
     }
   });
}
