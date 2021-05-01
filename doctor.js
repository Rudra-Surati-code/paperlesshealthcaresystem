var preloader = document.getElementById("body");

function loading() {
   preloader.style.display = "none";
}

function logout() {
  localStorage.clear();

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
  // For Firebase JS SDK v7..0 and later, measurementId is optional
  var firebaseConfig = {   apiKey: "AIzaSyBB9q3c68b3NpODrzh2Y5iVrh17ngIupfo",
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
});

function shudeleAppomentButton() {
    $("#scheduleAppointmentPage").toggleClass("d-none");
    window.location = "#scheduleAppointmentPage";
    var varDate = new Date();
var day = varDate.getDay();
var date = varDate.getDate();
var month = varDate.getMonth();
var year = varDate.getFullYear();
    if(day == 1) {
        $("#day1").html(`${date} / ${month} / ${year}`);
        $("#day2").html(`${date + 1} / ${month} / ${year}`);
        $("#day3").html(`${date + 2} / ${month} / ${year}`);
        $("#day4").html(`${date + 3} / ${month} / ${year}`);
        $("#day5").html(`${date + 4} / ${month} / ${year}`);
        $("#day6").html(`${date + 5} / ${month} / ${year}`);
    } else if(day == 2) {
        $("#day1").html(`${date - 1} / ${month} / ${year}`);
        $("#day2").html(`${date} / ${month} / ${year}`);
        $("#day3").html(`${date + 1} / ${month} / ${year}`);
        $("#day4").html(`${date + 2} / ${month} / ${year}`);
        $("#day5").html(`${date + 3} / ${month} / ${year}`);
        $("#day6").html(`${date + 4} / ${month} / ${year}`);
    } else if(day == 3) {
        $("#day1").html(`${date - 2} / ${month} / ${year}`);
        $("#day2").html(`${date - 1} / ${month} / ${year}`);
        $("#day3").html(`${date} / ${month} / ${year}`);
        $("#day4").html(`${date + 1} / ${month} / ${year}`);
        $("#day5").html(`${date + 2} / ${month} / ${year}`);
        $("#day6").html(`${date + 3} / ${month} / ${year}`);
    } else if(day == 4) {
        $("#day1").html(`${date - 3} / ${month} / ${year}`);
        $("#day2").html(`${date - 2} / ${month} / ${year}`);
        $("#day3").html(`${date - 1} / ${month} / ${year}`);
        $("#day4").html(`${date} / ${month} / ${year}`);
        $("#day5").html(`${date + 1} / ${month} / ${year}`);
        $("#day6").html(`${date + 2} / ${month} / ${year}`);
    } else if(day == 5) {
        $("#day1").html(`${date - 4} / ${month} / ${year}`);
        $("#day2").html(`${date - 3} / ${month} / ${year}`);
        $("#day3").html(`${date - 2} / ${month} / ${year}`);
        $("#day4").html(`${date - 1} / ${month} / ${year}`);
        $("#day5").html(`${date} / ${month} / ${year}`);
        $("#day6").html(`${date + 1} / ${month} / ${year}`);
    } else if(day == 6) {
        $("#day1").html(`${date - 5} / ${month} / ${year}`);
        $("#day2").html(`${date - 4} / ${month} / ${year}`);
        $("#day3").html(`${date - 3} / ${month} / ${year}`);
        $("#day4").html(`${date - 2} / ${month} / ${year}`);
        $("#day5").html(`${date - 1} / ${month} / ${year}`);
        $("#day6").html(`${date} / ${month} / ${year}`);
    } 
}

$("#monday11am").click(function() {
  $("#myModal").attr("data-toggle", "modal");
});
$("#monday12pm").click(function() {
  firebase.database().ref("slot/").child("slotShudeleMonday12am").set({
    slotdate : $("#day2").html(),
    slottime : "12:AM"
  })
});

$(".week-one").click(function() {
  if(day == 1) {
    var varDate = new Date();
        var day = varDate.getDay();
        var date = varDate.getDate();
        var month = varDate.getMonth();
        var year = varDate.getFullYear();
        $("#day1").html(`${date} / ${month} / ${year}`);
        $("#day2").html(`${date + 1} / ${month} / ${year}`);
        $("#day3").html(`${date + 2} / ${month} / ${year}`);
        $("#day4").html(`${date + 3} / ${month} / ${year}`);
        $("#day5").html(`${date + 4} / ${month} / ${year}`);
        $("#day6").html(`${date + 5} / ${month} / ${year}`);
    } else if(day == 2) {
        $("#day1").html(`${date - 1} / ${month} / ${year}`);
        $("#day2").html(`${date} / ${month} / ${year}`);
        $("#day3").html(`${date + 1} / ${month} / ${year}`);
        $("#day4").html(`${date + 2} / ${month} / ${year}`);
        $("#day5").html(`${date + 3} / ${month} / ${year}`);
        $("#day6").html(`${date + 4} / ${month} / ${year}`);
    } else if(day == 3) {
        $("#day1").html(`${date - 2} / ${month} / ${year}`);
        $("#day2").html(`${date - 1} / ${month} / ${year}`);
        $("#day3").html(`${date} / ${month} / ${year}`);
        $("#day4").html(`${date + 1} / ${month} / ${year}`);
        $("#day5").html(`${date + 2} / ${month} / ${year}`);
        $("#day6").html(`${date + 3} / ${month} / ${year}`);
    } else if(day == 4) {
        $("#day1").html(`${date - 3} / ${month} / ${year}`);
        $("#day2").html(`${date - 2} / ${month} / ${year}`);
        $("#day3").html(`${date - 1} / ${month} / ${year}`);
        $("#day4").html(`${date} / ${month} / ${year}`);
        $("#day5").html(`${date + 1} / ${month} / ${year}`);
        $("#day6").html(`${date + 2} / ${month} / ${year}`);
    } else if(day == 5) {
        $("#day1").html(`${date - 4} / ${month} / ${year}`);
        $("#day2").html(`${date - 3} / ${month} / ${year}`);
        $("#day3").html(`${date - 2} / ${month} / ${year}`);
        $("#day4").html(`${date - 1} / ${month} / ${year}`);
        $("#day5").html(`${date} / ${month} / ${year}`);
        $("#day6").html(`${date + 1} / ${month} / ${year}`);
    } else if(day == 6) {
        $("#day1").html(`${date - 5} / ${month} / ${year}`);
        $("#day2").html(`${date - 4} / ${month} / ${year}`);
        $("#day3").html(`${date - 3} / ${month} / ${year}`);
        $("#day4").html(`${date - 2} / ${month} / ${year}`);
        $("#day5").html(`${date - 1} / ${month} / ${year}`);
        $("#day6").html(`${date} / ${month} / ${year}`);
    }
})

$(".week-two").click(function() {
  if(day == 1) {
        var varDate = new Date();
        var day = varDate.getDay();
        var date = varDate.getDate();
        var month = varDate.getMonth();
        var year = varDate.getFullYear();
        $("#day1").html(`${date } / ${month + 1} / ${year}`);
        $("#day2").html(`${date } / ${month + 1} / ${year}`);
        $("#day3").html(`${date } / ${month + 1} / ${year}`);
        $("#day4").html(`${date} / ${month + 1} / ${year}`);
        $("#day5").html(`${date} / ${month + 1} / ${year}`);
        $("#day6").html(`${date} / ${month + 1} / ${year}`);
    } else if(day == 2) {
        $("#day1").html(`${date - 1} / ${month + 1} / ${year}`);
        $("#day2").html(`${date} / ${month + 1} / ${year}`);
        $("#day3").html(`${date + 1} / ${month + 1} / ${year}`);
        $("#day4").html(`${date + 2} / ${month + 1} / ${year}`);
        $("#day5").html(`${date + 3} / ${month + 1} / ${year}`);
        $("#day6").html(`${date + 4} / ${month + 1} / ${year}`);
    } else if(day == 3) {
        $("#day1").html(`${date - 2} / ${month + 1} / ${year}`);
        $("#day2").html(`${date - 1} / ${month + 1} / ${year}`);
        $("#day3").html(`${date} / ${month + 1} / ${year}`);
        $("#day4").html(`${date + 1} / ${month + 1} / ${year}`);
        $("#day5").html(`${date + 2} / ${month + 1} / ${year}`);
        $("#day6").html(`${date + 3} / ${month + 1} / ${year}`);
    } else if(day == 4) {
        $("#day1").html(`${date - 3} / ${month + 1} / ${year}`);
        $("#day2").html(`${date - 2} / ${month + 1} / ${year}`);
        $("#day3").html(`${date - 1} / ${month + 1} / ${year}`);
        $("#day4").html(`${date} / ${month + 1} / ${year}`);
        $("#day5").html(`${date + 1} / ${month + 1} / ${year}`);
        $("#day6").html(`${date + 2} / ${month + 1} / ${year}`);
    } else if(day == 5) {
        $("#day1").html(`${date + 7} / ${month + 1} / ${year}`);
        $("#day2").html(`${date + 8} / ${month + 1} / ${year}`);
        $("#day3").html(`${date + 9} / ${month + 1} / ${year}`);
        $("#day4").html(`${date + 10} / ${month + 1} / ${year}`);
        $("#day5").html(`${date + 11} / ${month + 1} / ${year}`);
        $("#day6").html(`${date + 12} / ${month + 1} / ${year}`);
    } else if(day == 6) {
        $("#day1").html(`${date - 5} / ${month + 1} / ${year}`);
        $("#day2").html(`${date - 4} / ${month + 1} / ${year}`);
        $("#day3").html(`${date - 3} / ${month + 1} / ${year}`);
        $("#day4").html(`${date - 2} / ${month + 1} / ${year}`);
        $("#day5").html(`${date - 1} / ${month + 1} / ${year}`);
        $("#day6").html(`${date} / ${month + 1} / ${year}`);
    }
})

$("#monday11am").click(function() {
    $(".modal-title").text("Schedule Appointment at Monday 11 AM");
    var SBM11AMS = `<button class="btn btn-success" id="SBM11AMS">Shudele Appointment</button><br><br>`;
    var SBM11AMC = `<button class="btn btn-danger" id="SBM11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM11AMS+SBM11AMC);
})

$("#SBM11AMS").click(function() {
    // firebase.database().ref("slot/").child("slotShudeleMonday11am").set({
    //     sloteDate: $("#day1").val(),
    //     sloteTime: "11:AM"
    // })
    alert("Success");
})

$("#SBM11AMS").click(function() {
    firebase.database().ref("slot/").child("slotShudeleMonday11am").remove()
})