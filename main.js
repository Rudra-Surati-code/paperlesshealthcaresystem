var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";

   if (localStorage.getItem("name") == null == false) {
      window.location = "whatyouare.html";
   } else if(localStorage.getItem("email") == null == false) {
    window.location = "whatyouare.html";
   }
}

$(function() {
  $(".btn").click(function() {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
  });
});

$(function() {
  $(".btn-signup").click(function() {
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
  });
});

$(function() {
  $(".btn-signin").click(function() {
    name = document.getElementById("name").value;
  email = document.getElementById("email").value;

    if (name == "") {
      document.getElementById("error").innerHTML = "Please enter a valid name";
    } else if (email == "") {
    document.getElementById("error").innerHTML = "Please enter a valid email";
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      document.getElementById("error").innerHTML = "";

      window.location = "whatyouare.html";
  }
  });
});

// 

document.getElementById('submit').addEventListener('click', function(inputText) {
    name = document.getElementById("name").value;
	email = document.getElementById("email").value;

    if (name == "") {
    	document.getElementById("error").innerHTML = "Please enter a valid name";
    } else if (email == "") {
		document.getElementById("error").innerHTML = "Please enter a valid email";
    } else {
    	localStorage.setItem("name", name);
		localStorage.setItem("email", email);
		document.getElementById("error").innerHTML = "";

		window.location = "whatyouare.html";
  }
  });