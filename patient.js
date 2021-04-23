var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";

   if(localStorage.getItem("phone") == null == false) {
   		document.getElementById("phone").style.display = "none";
   		document.getElementById("go").style.display = "none";
   		document.getElementById("umd").innerHTML = null;
   }
}
function logout() {
   window.localStorage.clear();

   window.location = "index.html";
}
// DataBase

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBB9q3c68b3NpODrzh2Y5iVrh17ngIupfo",
    authDomain: "paper-less-health-care-s-31077.firebaseapp.com",
    databaseURL: "https://paper-less-health-care-s-31077-default-rtdb.firebaseio.com",
    projectId: "paper-less-health-care-s-31077",
    storageBucket: "paper-less-health-care-s-31077.appspot.com",
    messagingSenderId: "543851857318",
    appId: "1:543851857318:web:d975ccb433f7f18ad77b67",
    measurementId: "G-8Y3NK2TGFQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function phoneNumber() {
	var phone = document.getElementById("phone").value;
	if(phone == "") {
		document.getElementById("error").innerHTML = "Please enter a phone number";
	} else {
		localStorage.setItem("phone", document.getElementById("phone").value);
	}
}

function scheduleAppointment() {
	document.getElementById("success").innerHTML = "Your Request has been successfull Sent";
	firebase.database().ref("patient/").child(localStorage.getItem("phone")).set({
     phone : localStorage.getItem("phone"),
     name : localStorage.getItem("name"),
     email : localStorage.getItem("email"),
     button : `<button onclick="document.getElementById('scheduleAppointmentPage').classList.remove('d-none'); window.location = '#scheduleAppointmentPage'" style='color: black; background-color: lightblue; padding: 10px;'><h4>Schedule Appointment</h4></button>`
 })
}

function medicalReport() {
  document.getElementById('report').classList.remove('d-none');
firebase.database().ref("doctor/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      $("#patientMedicalReport").html(childData.pm);
      $("#patientLaboratory").html(childData.pl);
      $("#patientImagineCenter").html(childData.pic)
    });
});
window.location = '#report';
}