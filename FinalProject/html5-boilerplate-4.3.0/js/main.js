var currentTab = '#tabFurniture';
var currentSection = '#furniture';

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
      }
}
