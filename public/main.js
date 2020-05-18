let menu_open = false;

$(document).ready(function(){
  $("#navbar").load("navBar.html");
});

$(document).ready(function(){
  $("#footer").load("footer.html");
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
}

function navBarClicked()
{
  console.log(document.getElementById('navItems').children);
}

function sendQuery()
{
  var templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('about').value
  };
 
  emailjs.send('gmail', 'template_apYv6lqh', templateParams)
    .then(function(response) {
      document.getElementById("queryForm").reset();      
      alert("Your query has been sent. We will contact you soon");      
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      document.getElementById("queryForm").reset();      
      alert("Unable to send query at the moment. Please try again later.");
  });
}

