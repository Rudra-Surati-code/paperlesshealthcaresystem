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
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("email");

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
     button : `<button style='color: black; background-color: lightblue; padding: 10px;' onclick='shudeleAppomentButton();'><h4>Schedule Appointment</h4></button>`
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

function medicalReceipt() {
  document.getElementById('Receipt').classList.remove('d-none');
  firebase.database().ref("medicalcenter/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      document.getElementById("Recipit").src = `${childData.receipt}`;
    });
  });
  window.location = '#Receipt';
}

function labReport() {
  document.getElementById("lbR").classList.remove("d-none");
  firebase.database().ref("laboratatory/").child("/").on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        document.getElementById("lbRImg").src = `${childData.laboratatoryReport}`;
      });
    });
  window.location = "#lbR";
}

function IMReport() {
  document.getElementById("icR").classList.remove("d-none");
  firebase.database().ref("imaginecenter/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      document.getElementById("icRImg").src = `${childData.imaginecenterReport}`;
    });
  });
  window.location = "#icR";
}

/*function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    notify();
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
      }
    });
  }
  
  function notify() {
    var notification = new Notification('TITLE OF NOTIFICATION', {
      body: "Hey! You are on notice!",
    });

    notification.onclick = function () {
      window.open("http://carnes.cc");      
    };
    setTimeout(notification.close.bind(notification), 7000); 
  }

}
notifyMe();*/