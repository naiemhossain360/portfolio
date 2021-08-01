function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "Naiem"&& pass=="Treema")
  	{
  	    window.location.href="my-love-at-first-sight-my-love-story.html";
  	}
  	else
  	{
  		alert("Your Username & Password Invalid.");
  		window.location.href="login-love-story-miss-u-love.html";
  	}	
};
