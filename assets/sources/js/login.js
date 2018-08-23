var base_url = 'http://localhost/MarketplaceSSI/index.php/';
$(document).ready(function(){
   
});

$('.btn-success').click(function(){
  LogIn();
});


function LogIn() 
{
    $.post(base_url+'Login/loginMe',
      {
        'user': $('#user').val(),
    	'pssw': $('#pssw').val()
      },
      function (data)
      {
      	alert(JSON.parse(data).msg);
          
      	if (JSON.parse(data).user == 'Administrador') 
      	{window.location = `${base_url}Administrador`;}
      	else if(JSON.parse(data).user == 'Maestro')
      	{window.location = `${base_url}Administrador`;}
        
     });
}