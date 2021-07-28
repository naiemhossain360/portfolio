function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "1"&& pass=="1")
  	{
  	    window.location.href="love-at-first-sight-miss-u-love.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="demo.html";
  	}	
};
