var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";
}

function logout() {
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("email");

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

function fetchAllData() {
  firebase.database().ref("patient/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      $("#Name").html("Name :- "  + childData.name);
      $("#Email").html("Email :- " + childData.email);
      $("#Phone").html("Phone :- " + childData.phone);
      $(".button-take").html(childData.button);
    });
});
}


$('.tds-textarea').keyup(function() {
    $(this).next('.textarea-clone').html(this.value.replace("/\n/g", '<br/>'));
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

$("#gplr").click(function() {
  $("#gplr-report").toggleClass("d-none");
  window.location = "#gplr-report";
  firebase.database().ref("laboratatory/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      $("#gplr-report-iframe").attr("src", childData.laboratatoryReport);
    });
});
})

$("#gpicr").click(function() {
  $("#gpicr-report").toggleClass("d-none");
  window.location = "#gpicr-report";
  firebase.database().ref("imaginecenter/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      $("#gpicr-report-iframe").attr("src", childData.imaginecenterReport);
    });
});
})

function shudeleAppomentButton() {
    $("#scheduleAppointmentPage").toggleClass("d-none");
    window.location = "#scheduleAppointmentPage";
    var varDate = new Date();
    date = varDate.getDate();
    $("#day1").text(date);
}