function fadeEffect()
{
   $(document).ready(function(){
     $("#skillset_section_title").fadeIn();

     $(".specialty_sections:nth-of-type(1)").delay(1000).fadeIn(1000);
     $(".specialty_sections:nth-of-type(2)").delay(2000).fadeIn(1000);
     $(".specialty_sections:nth-of-type(3)").delay(3000).fadeIn(1000);
   });
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
