let menu_open = false;

$(document).ready(function(){
  $("#navbar").load("navBar.html");
});

function moveToPage(page)
{
  const domain = 'http://127.0.0.1:5500/public/';

  window.location = domain+page+'.html';

}

function menuOpen()
{
  menu_open = !menu_open;

  if(menu_open)
  {
    let element = document.getElementById('menuOpenButton');

    element.classList.remove("block");
  
    element.classList.add('hidden');
  
    let element_2 = document.getElementById('menuCloseButton');
  
    element_2.classList.remove("hidden");
  
    element_2.classList.add('block');

    let element_3 = document.getElementById('showMenu');

    console.log(element_3);

    element_3.classList.remove("hidden");
  
    element_3.classList.add('block');    

  }

  else
  {
    let element = document.getElementById('menuOpenButton');

    element.classList.remove("hidden");
  
    element.classList.add('block');
  
    let element_2 = document.getElementById('menuCloseButton');
  
    element_2.classList.remove("block");
  
    element_2.classList.add('hidden');    

    let element_3 = document.getElementById('showMenu');

    element_3.classList.remove("block");
  
    element_3.classList.add('hidden');        

  }

  alert(menu_open);
}
