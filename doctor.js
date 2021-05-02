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

let newDate = new Date();
let day = newDate.getDay();
let date = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();

function shudeleAppomentButton() {
    $("#scheduleAppointmentPage").toggleClass("d-none");
    window.location = "#scheduleAppointmentPage";
    $("#day1").html(`${date} / ${month} / ${year}`);
    $("#day2").html(`${date + 1} / ${month} / ${year}`);
    $("#day3").html(`${date + 2} / ${month} / ${year}`);
    $("#day4").html(`${date + 3} / ${month} / ${year}`);
    $("#day5").html(`${date + 4} / ${month} / ${year}`);
    $("#day6").html(`${date + 5} / ${month} / ${year}`);
    if(localStorage.getItem("monday11ambo") == "true" == true) {
        $("#monday11am").css("background", "orange");
    }
}
// Monday
$("#monday11am").click(function() {
    if(localStorage.getItem("monday11ambo") == "true" == true) {
        $("#SBM11AMC").removeAttr("disabled");
    }
    $(".modal-title").text("Schedule Appointment at Monday 11:00 AM");
    var SBM11AMS = `<button class="btn btn-success" id="SBM11AMS">Shudele Appointment</button><br><br>`;
    var SBM11AMC = `<button class="btn btn-danger" disabled id="SBM11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM11AMS+SBM11AMC);

    $("#SBM11AMS").click(function() {
        firebase.database().ref("slotSBM11AM/").set({
            slotdate: $("#day1").text(),
            slottime: "11:00 AM"
        })

    localStorage.setItem("monday11ambo", "true");
    $("#SBM11AMC").removeAttr("disabled");
    $("#monday11am").css("background", "orange");
    })

    $("#SBM11AMC").click(function() {
        firebase.database().ref("slotSBM11AM/").remove()
        $("#SBM11AMC").attr("disabled");
    localStorage.removeItem("monday11ambo");
    $("#monday11am").css("background", "#fff");
    })
})
$("#monday12pm").click(function() {
    $(".modal-title").text("Schedule Appointment at Monday 12:00 PM");
    var SBM12PMS = `<button class="btn btn-success" id="SBM12PMS">Shudele Appointment</button><br><br>`;
    var SBM12PMC = `<button class="btn btn-danger" disabled id="SBM12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM12PMS+SBM12PMC);

    $("#SBM12PMS").click(function() {
        firebase.database().ref("slotSBM12PM/").set({
            slotdate: $("#day1").text(),
            slottime: "12:00 PM"
        })
        $("#SBM12PMC").removeAttr("disabled");
    })

    $("#SBM11AMC").click(function() {
        firebase.database().ref("slotSBM12PM/").remove()
    })
})
$("#monday1pm").click(function() {
    $(".modal-title").text("Schedule Appointment at Monday 01:00 PM");
    var SBM01PMS = `<button class="btn btn-success" id="SBM01PMS">Shudele Appointment</button><br><br>`;
    var SBM01PMC = `<button class="btn btn-danger" disabled id="SBM01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM01PMS+SBM01PMC);

    $("#SBM01PMS").click(function() {
        firebase.database().ref("slotSBM01PMS/").set({
            slotdate: $("#day1").text(),
            slottime: "01:00 PM"
        })
        $("#SBM01PMC").removeAttr("disabled");
    })

    $("#SBM01PMC").click(function() {
        firebase.database().ref("slotSBM01PMS/").remove()
    })
})
$("#monday2pm").click(function() {
    $(".modal-title").text("Schedule Appointment at Monday 02:00 AM");
    var SBM02PMS = `<button class="btn btn-success" id="SBM02PMS">Shudele Appointment</button><br><br>`;
    var SBM02PMC = `<button class="btn btn-danger" disabled id="SBM02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM02PMS+SBM02PMC);

    $("#SBM02PMS").click(function() {
        firebase.database().ref("slotSBM02PMS/").set({
            slotdate: $("#day1").text(),
            slottime: "02:00 AM"
        })
        $("#SBM02PMC").removeAttr("disabled");
    })

    $("#SBM02PMC").click(function() {
        firebase.database().ref("slotSBM02PMS/").remove()
    })
})

$(".cls").click(function() {
    $(".modal-body").empty();
})