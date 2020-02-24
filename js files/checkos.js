function checkos()
{
   var downloadlink = "../AnonyMail.zip";
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
