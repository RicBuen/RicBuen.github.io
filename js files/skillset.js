var sectionIndex = 1; //Starting starting index
showSections(sectionIndex);

//For changing sections
function changeSections(n)
{
   showSections(sectionIndex += n); //sectionIndex = sectionIndex + n
}

//For showing the sections
function showSections(n)
{
  var i;
  var sections = document.getElementsByClassName("slideshow_sections"); //gets the section slides

  if(n > sections.length){ sectionIndex = 1 } //if n is greater than the number of slides, set it back to 1
  if(n < 1){ sectionIndex = sections.length }

  for (i = 0; i < sections.length; i++)
  {
     sections[i].style.display = "none";
  }

  sections[sectionIndex-1].style.display = "initial";
}

function loadPage()
{
   $(document).ready(function(){
     $(".skillset_slideshow").fadeIn(2000);
   });
}
