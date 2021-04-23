var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";

   if (localStorage.getItem("name") == null == false) {
      window.location = "whatyouare.html";
   } else if(localStorage.getItem("email") == null == false) {
    window.location = "whatyouare.html";
   }
}

var current = null;
document.querySelector('#name').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('click', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
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