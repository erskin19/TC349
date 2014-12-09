var currentTab = '#tab1';
var currentSection = '#home';
var tabs = ['#tab1', '#tab2', '#tab3', '#tab4', '#tab5'];
var sections = ['#home', '#furniture', '#carvings', '#crafts', '#directions'];
var current = 0;

function SelectThis(tab, section)
{
      if(currentTab != tab)
      {
          $(currentTab).removeClass("selected");
          currentTab = tab;
          $(currentTab).addClass("selected");
          $(currentSection).hide();
          currentSection = section;
          $(currentSection).show();
          
          for	(var i = 0; i < tabs.length; i++) {
            if(currentTab==tabs[i])
                current = i;
          }
          
      }
}


function detectmob() {
   if(window.innerWidth <= 480 && window.innerHeight <= 600) {
     $("#call").show();
    $(".content").on("swipeleft",function(){
        if(current != tabs.length-1)
        {
            $(tabs[current]).removeClass("selected");
            $(sections[current]).hide();
            current++;
            currentTab = tabs[current];
            $(currentTab).addClass("selected");
            currentSection = sections[current];
            $(currentSection).show();
        }
    }); 
    $(".content").on("swiperight",function(){
        if(current != 0)
        {
            $(tabs[current]).removeClass("selected");
            $(sections[current]).hide();
            current--;
            currentTab = tabs[current];
            $(currentTab).addClass("selected");
            currentSection = sections[current];
            $(currentSection).show();
        }
    }); 
   }
    
    //needed for removing stupid loading message with jquery mobile's ajax
    $.mobile.loading().hide();
}

$( document ).ready(detectmob());
