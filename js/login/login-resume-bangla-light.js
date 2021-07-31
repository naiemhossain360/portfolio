function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "Admin"&& pass=="654321")
  	{
  	    window.location.href="resume-bangla-light.html";
  	}
  	else
  	{
  		alert("Your Username & Password Invalid.");
  		window.location.href="login-resume-bangla-light.html";
  	}	
};
