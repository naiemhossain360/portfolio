function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "1"&& pass=="1")
  	{
  	    window.location.href="home.html";
  	}
  	else
  	{
  		alert("Your Username & Password Invalid.");
  		window.location.href="index.html";
  	}	
};
