var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";
   if(localStorage.getItem("person") == "doctor") {
   		window.location = "doctor.html";
   } else if(localStorage.getItem("person") == "patient") {
   		window.location = "patient.html";
   } else if(localStorage.getItem("person") == "laboratory") {
      window.location = "labotatory.html";
   } else if(localStorage.getItem("person") == "imaginecenter") {
      window.location = "imaginecenter.html";
   } else if(localStorage.getItem("person") == "medicalstore") {
      window.location = "medicalcenter.html";
   }
}

function doctor() {
	localStorage.setItem("person", "doctor")

	window.location = "doctor.html";
}

function patient() {
	localStorage.setItem("person", "patient");

	window.location = "patient.html";
}

function laboratory() {
   localStorage.setItem("person", "laboratory");

   window.location = "labotatory.html";
} 

function imaginecenter() {
   localStorage.setItem("person", "imaginecenter")

   window.location = "imaginecenter.html";
}

function medicalstore() {
   localStorage.setItem("person", "medicalstore")

   window.location = "medicalcenter.html";
}

function logout() {
   window.localStorage.clear();

   window.location = "index.html";
}
