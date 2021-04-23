var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";
}

function logout() {
   window.localStorage.clear();

   window.location = "index.html";
}

$(document).ready(function() {
	$(".opd-button").click(function() {
		$("#opd").toggleClass("d-none");
		window.location = "#opd";
	})
})

$(document).ready(function() {
	$(".treatment-button").click(function() {
		$("#treatment").toggleClass("d-none");
		window.location = "#treatment";
	})
})

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

function fetchAllData() {
  firebase.database().ref("patient/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      $("#Name").text("Name :- "  + childData.name);
      $("#Email").text("Email :- " + childData.email);
      $("#Phone").text("Phone :- " + childData.phone);
      $(".button-take").html(childData.button);
    });
});
}


$('.tds-textarea').keyup(function() {
    $(this).next('.textarea-clone').html(this.value.replace(/\n/g, '<br/>'));
});

function prescriptionMedicineSend() {
  firebase.database().ref("doctor/").child("prescriptionMedicine").set({
    pm : document.getElementById("prescriptionMedicineInput").value
  })
}

function prescriptionLaboratorySend() {
  firebase.database().ref("doctor/").child("prescriptionLaboratory").set({
    pl : document.getElementById("prescriptionLaboratoryInput").value
  })
}

function prescriptionImagineCenterSend() {
  firebase.database().ref("doctor/").child("prescriptionImagineCenter").set({
    pic : document.getElementById("prescriptionImagineCenterInput").value
  })
}