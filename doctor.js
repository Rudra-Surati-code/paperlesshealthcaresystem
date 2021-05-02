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
            $("#Name").html("Name :- " + childData.name);
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
        pm: document.getElementById("prescriptionMedicineInput").value
    })
}

function prescriptionLaboratorySend() {
    firebase.database().ref("doctor/").child("prescriptionLaboratory").set({
        pl: document.getElementById("prescriptionLaboratoryInput").value
    })
}

function prescriptionImagineCenterSend() {
    firebase.database().ref("doctor/").child("prescriptionImagineCenter").set({
        pic: document.getElementById("prescriptionImagineCenterInput").value
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
    if (localStorage.getItem("monday11ambo") == "true" == true) {
        $("#monday11am").css("background", "orange");
    }
    if (localStorage.getItem("monday12pmbo") == "true" == true) {
        $("#monday12pm").css("background", "orange");
    }
    if (localStorage.getItem("monday1pmbo") == "true" == true) {
        $("#monday1pm").css("background", "orange");
    }
    if (localStorage.getItem("monday2pmbo") == "true" == true) {
        $("#monday2pm").css("background", "orange");
    }
    if (localStorage.getItem("tuesday11ambo") == "true" == true) {
        $("#tuesday11am").css("background", "orange");
    }
    if (localStorage.getItem("tuesday1pmbo") == "true" == true) {
        $("#tuesday1pm").css("background", "orange");
    }
    if (localStorage.getItem("tuesday2pmbo") == "true" == true) {
        $("#tuesday2pm").css("background", "orange");
    }
    if (localStorage.getItem("wednesday11ambo") == "true" == true) {
        $("#wednesday11am").css("background", "orange");
    }
    if (localStorage.getItem("wednesday12pmbo") == "true" == true) {
        $("#wednesday12pm").css("background", "orange");
    }
    if (localStorage.getItem("wednesday1pmbo") == "true" == true) {
        $("#wednesday1pm").css("background", "orange");
    }
    if (localStorage.getItem("wednesday2pmbo") == "true" == true) {
        $("#wednesday2pm").css("background", "orange");
    }
    if (localStorage.getItem("thursday11ambo") == "true" == true) {
        $("#thursday11am").css("background", "orange");
    }
    if (localStorage.getItem("thursday1pmbo") == "true" == true) {
        $("#thursday1pm").css("background", "orange");
    }
    if (localStorage.getItem("thursday2pmbo") == "true" == true) {
        $("#thursday2pm").css("background", "orange");
    }
    if (localStorage.getItem("saturaday11ambo") == "true" == true) {
        $("#saturaday11am").css("background", "orange");
    }
    if (localStorage.getItem("saturaday12pmbo") == "true" == true) {
        $("#saturaday12pm").css("background", "orange");
    }
    if (localStorage.getItem("saturaday1pmbo") == "true" == true) {
        $("#saturaday1pm").css("background", "orange");
    }
    if (localStorage.getItem("saturaday2pmbo") == "true" == true) {
        $("#saturaday2pm").css("background", "orange");
    }
    if(localStorage.getItem("friday11ambo") == "true" == true) {
        $("#friday11am").css("background", "orange");
    }
    if(localStorage.getItem("friday12pmbo") == "true" == true) {
        $("#friday12pm").css("background", "orange");
    }
    if(localStorage.getItem("friday1pmbo") == "true" == true) {
        $("friday1pm").css("background", "orange");
    }
    if(localStorage.getItem("friday2pmbo") == "true" == true) {
        $("friday2pm").css("background", "orange");
    }
}
// Monday
$("#monday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at <br> ${$("#day1").text()} 11:00 AM`);
    var SBM11AMS = `<button class="btn btn-success" id="SBM11AMS">Shudele Appointment</button><br><br>`;
    var SBM11AMC = `<button class="btn btn-danger" id="SBM11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM11AMS + SBM11AMC);

    $("#SBM11AMS").click(function() {
        firebase.database().ref("slotSBM11AM/").set({
            slotdate: $("#day1").text(),
            slottime: "11:00 AM"
        })

        localStorage.setItem("monday11ambo", "true");
        $("#monday11am").css("background", "orange");
    })

    $("#SBM11AMC").click(function() {
        firebase.database().ref("slotSBM11AM/").remove()
        localStorage.removeItem("monday11ambo");
        $("#monday11am").css("background", "#fff");
    })
})

$("#monday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at <br> ${$("#day1").text()} 12:00 PM`);
    var SBM12PMS = `<button class="btn btn-success" id="SBM12PMS">Shudele Appointment</button><br><br>`;
    var SBM12PMC = `<button class="btn btn-danger" id="SBM12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM12PMS + SBM12PMC);

    $("#SBM12PMS").click(function() {
        firebase.database().ref("slotSBM12PM/").set({
            slotdate: $("#day1").text(),
            slottime: "12:00 PM"
        });
        localStorage.setItem("monday12pmbo", "true");
        $("#monday12pm").css("background", "orange");
    })

    $("#SBM12PMC").click(function() {
        firebase.database().ref("slotSBM12PM/").remove();
        localStorage.removeItem("monday12pmbo");
        $("#monday12pm").css("background", "#fff");
    })
})

$("#monday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at <br> ${$("#day1").text()} 1:00 PM`);
    var SBM01PMS = `<button class="btn btn-success" id="SBM01PMS">Shudele Appointment</button><br><br>`;
    var SBM01PMC = `<button class="btn btn-danger" id="SBM01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM01PMS+SBM01PMC);

    $("#SBM01PMS").click(function() {
        firebase.database().ref("slotSBM01PM/").set({
            slotdate: $("#day1").text(),
            slottime: "01:00 PM"
        });
        localStorage.setItem("monday1pmbo", "true");
        $("#monday1pm").css("background", "orange");
    })

    $("#SBM01PMC").click(function() {
        firebase.database().ref("slotSBM01PM/").remove();
        localStorage.removeItem("monday1pmbo");
        $("#monday1pm").css("background", "#fff");
    })
})

$("#monday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at <br> ${$("#day1").text()} 02:00 AM`);
    var SBM02PMS = `<button class="btn btn-success" id="SBM02PMS">Shudele Appointment</button><br><br>`;
    var SBM02PMC = `<button class="btn btn-danger" id="SBM02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBM02PMS+SBM02PMC);

    $("#SBM02PMS").click(function() {
        firebase.database().ref("slotSBM02PM/").set({
            slotdate: $("#day1").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("monday2pmbo", "true");
        $("#monday2pm").css("background", "orange");
    })

    $("#SBM02PMC").click(function() {
        firebase.database().ref("slotSBM02PM/").remove();
        localStorage.removeItem("monday2pmbo");
        $("#monday2pm").css("background", "#fff");
    })
})

// Tuesday
$("#tuesday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day2").text()} AM`);
    var SBT11AMS = `<button class="btn btn-success" id="SBT11AMS">Shudele Appointment</button><br><br>`;
    var SBT11AMC = `<button class="btn btn-danger" id="SBT11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBT11AMS + SBT11AMC);

    $("#SBT11AMS").click(function() {
        firebase.database().ref("slotSBT11AM/").set({
            slotdate: $("#day2").text(),
            slottime: "11:00 AM"
        })

        localStorage.setItem("tuesday11ambo", "true");
        $("#tuesday11am").css("background", "orange");
    })

    $("#SBT11AMC").click(function() {
        firebase.database().ref("slotSBT11AM/").remove()
        localStorage.removeItem("tuesday11ambo");
        $("#tuesday11am").css("background", "#fff");
    })
})
$("#tuesday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day2").text()} 12:00 PM`);
    var SBT12PMS = `<button class="btn btn-success" id="SBT12PMS">Shudele Appointment</button><br><br>`;
    var SBT12PMC = `<button class="btn btn-danger" id="SBT12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBT12PMS + SBT12PMC);

    $("#SBT12PMS").click(function() {
        firebase.database().ref("slotSBT12PM/").set({
            slotdate: $("#day2").text(),
            slottime: "12:00 PM"
        })
        localStorage.setItem("tuesday12pmbo", "true");
        $("#tuesday12pm").css("background", "orange");
    })

    $("#SBT12PMC").click(function() {
        firebase.database().ref("slotSBT12PM/").remove();
        localStorage.removeItem("tuesday12pmbo");
        $("#tuesday12pm").css("background", "#fff");
    })
})
$("#tuesday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day2").text()} 01:00 PM`);
    var SBT01PMS = `<button class="btn btn-success" id="SBT01PMS">Shudele Appointment</button><br><br>`;
    var SBT01PMC = `<button class="btn btn-danger" id="SBT01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBT01PMS + SBT01PMC);

    $("#SBT01PMS").click(function() {
        firebase.database().ref("slotSBT01PM/").set({
            slotdate: $("#day2").text(),
            slottime: "01:00 PM"
        })
        localStorage.setItem("tuesday1pmbo", "true");
        $("#tuesday1pm").css("background", "orange");
    })

    $("#SBT01PMC").click(function() {
        firebase.database().ref("slotSBT01PM/").remove();
        localStorage.removeItem("tuesday1pmbo");
        $("#tuesday1pm").css("background", "#fff");
    })
})
$("#tuesday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day2").text()} 02:00 AM`);
    var SBT02PMS = `<button class="btn btn-success" id="SBT02PMS">Shudele Appointment</button><br><br>`;
    var SBT02PMC = `<button class="btn btn-danger" id="SBT02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBT02PMS + SBT02PMC);

    $("#SBT02PMS").click(function() {
        firebase.database().ref("slotSBT02PM/").set({
            slotdate: $("#day2").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("tuesday2pmbo", "true");
        $("#tuesday2pm").css("background", "orange");
    })

    $("#SBT02PMC").click(function() {
        firebase.database().ref("slotSBT02PM/").remove();
        localStorage.removeItem("tuesday2pmbo");
        $("#tuesday2pm").css("background", "#fff");
    })
})

// Wednesday
$("#wednesday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day3").text()} AM`);
    var SBW11AMS = `<button class="btn btn-success" id="SBW11AMS">Shudele Appointment</button><br><br>`;
    var SBW11AMC = `<button class="btn btn-danger" id="SBW11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBW11AMS + SBW11AMC);

    $("#SBW11AMS").click(function() {
        firebase.database().ref("slotSBW11AM/").set({
            slotdate: $("#day3").text(),
            slottime: "11:00 AM"
        })
        $("#wednesday11am").css("background", "orange");

        localStorage.setItem("wednesday11ambo", "true");
        $("#wednesday11am").css("background", "orange");
    })

    $("#SBW11AMC").click(function() {
        firebase.database().ref("slotSBW11AM/").remove()
        localStorage.removeItem("wednesday11ambo");
        $("#wednesday11am").css("background", "#fff");
    })
})
$("#wednesday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day3").text()} 12:00 PM`);
    var SBW12PMS = `<button class="btn btn-success" id="SBW12PMS">Shudele Appointment</button><br><br>`;
    var SBW12PMC = `<button class="btn btn-danger" id="SBW12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBW12PMS + SBW12PMC);

    $("#SBW12PMS").click(function() {
        firebase.database().ref("slotSBW12PM/").set({
            slotdate: $("#day3").text(),
            slottime: "12:00 PM"
        })
        localStorage.setItem("wednesday12pmbo", "true");
        $("#wednesday12pm").css("background", "orange");
    })

    $("#SBW12PMC").click(function() {
        firebase.database().ref("slotSBW12PM/").remove();
        localStorage.removeItem("wednesday12pmbo");
        $("#wednesday12pm").css("background", "#fff");
    })
})
$("#wednesday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day3").text()} 01:00 PM`);
    var SBW01PMS = `<button class="btn btn-success" id="SBW01PMS">Shudele Appointment</button><br><br>`;
    var SBW01PMC = `<button class="btn btn-danger" id="SBW01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBW01PMS + SBW01PMC);

    $("#SBW01PMS").click(function() {
        firebase.database().ref("slotSBW01PM/").set({
            slotdate: $("#day3").text(),
            slottime: "01:00 PM"
        })
        localStorage.setItem("wednesday1pmbo", "true");
        $("#wednesday1pm").css("background", "orange");
    })

    $("#SBW01PMC").click(function() {
        firebase.database().ref("slotSBW01PM/").remove();
        localStorage.removeItem("wednesday1pmbo");
        $("#wednesday1pm").css("background", "#fff");
    })
})
$("#wednesday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day3").text()} 02:00 AM`);
    var SBW02PMS = `<button class="btn btn-success" id="SBW02PMS">Shudele Appointment</button><br><br>`;
    var SBW02PMC = `<button class="btn btn-danger" id="SBW02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBW02PMS + SBW02PMC);

    $("#SBW02PMS").click(function() {
        firebase.database().ref("slotSBW02PM/").set({
            slotdate: $("#day3").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("wednesday2pmbo", "true");
        $("#wednesday2pm").css("background", "orange");
    })

    $("#SBW02PMC").click(function() {
        firebase.database().ref("slotSBW02PM/").remove();
        localStorage.removeItem("wednesday2pmbo");
        $("#wednesday2pm").css("background", "#fff");
    })
})

// Thursday
$("#thursday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day4").text()} AM`);
    var SBTH11AMS = `<button class="btn btn-success" id="SBTH11AMS">Shudele Appointment</button><br><br>`;
    var SBTH11AMC = `<button class="btn btn-danger" id="SBTH11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBTH11AMS + SBTH11AMC);

    $("#SBTH11AMS").click(function() {
        firebase.database().ref("slotSBTH11AM/").set({
            slotdate: $("#day4").text(),
            slottime: "11:00 AM"
        })
        $("#thursday11am").css("background", "orange");

        localStorage.setItem("thursday11ambo", "true");
        $("#thursday11am").css("background", "orange");
    })

    $("#SBTH11AMC").click(function() {
        firebase.database().ref("slotSBTH11AM/").remove()
        localStorage.removeItem("thursday11ambo");
        $("#thursday11am").css("background", "#fff");
    })
})
$("#thursday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day4").text()} 12:00 PM`);
    var SBTH12PMS = `<button class="btn btn-success" id="SBTH12PMS">Shudele Appointment</button><br><br>`;
    var SBTH12PMC = `<button class="btn btn-danger" id="SBTH12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBTH12PMS + SBTH12PMC);

    $("#SBTH12PMS").click(function() {
        firebase.database().ref("slotSBTH12PM/").set({
            slotdate: $("#day4").text(),
            slottime: "12:00 PM"
        })
        localStorage.setItem("thursday12pmbo", "true");
        $("#thursday12pm").css("background", "orange");
    })

    $("#SBTH12PMC").click(function() {
        firebase.database().ref("slotSBTH12PM/").remove();
        localStorage.removeItem("thursday12pmbo");
        $("#thursday12pm").css("background", "#fff");
    })
})
$("#thursday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day4").text()} 01:00 PM`);
    var SBTH01PMS = `<button class="btn btn-success" id="SBTH01PMS">Shudele Appointment</button><br><br>`;
    var SBTH01PMC = `<button class="btn btn-danger" id="SBTH01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBTH01PMS + SBTH01PMC);

    $("#SBTH01PMS").click(function() {
        firebase.database().ref("slotSBTH01PM/").set({
            slotdate: $("#day4").text(),
            slottime: "01:00 PM"
        })
        localStorage.setItem("thursday1pmbo", "true");
        $("#thursday1pm").css("background", "orange");
    })

    $("#SBTH01PMC").click(function() {
        firebase.database().ref("slotSBTH01PM/").remove();
        localStorage.removeItem("thursday1pmbo");
        $("#thursday1pm").css("background", "#fff");
    })
})
$("#thursday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day4").text()} 02:00 AM`);
    var SBTH02PMS = `<button class="btn btn-success" id="SBTH02PMS">Shudele Appointment</button><br><br>`;
    var SBTH02PMC = `<button class="btn btn-danger" id="SBTH02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBTH02PMS + SBTH02PMC);

    $("#SBTH02PMS").click(function() {
        firebase.database().ref("slotSBTH02PM/").set({
            slotdate: $("#day4").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("thursday2pmbo", "true");
        $("#thursday2pm").css("background", "orange");
    })

    $("#SBTH02PMC").click(function() {
        firebase.database().ref("slotSBTH02PM/").remove();
        localStorage.removeItem("thursday2pmbo");
        $("#thursday2pm").css("background", "#fff");
    })
})

// Saturaday
$("#saturaday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day6").text()} AM`);
    var SBS11AMS = `<button class="btn btn-success" id="SBS11AMS">Shudele Appointment</button><br><br>`;
    var SBS11AMC = `<button class="btn btn-danger" id="SBS11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBS11AMS + SBS11AMC);

    $("#SBS11AMS").click(function() {
        firebase.database().ref("slotSBS11AM/").set({
            slotdate: $("#day6").text(),
            slottime: "11:00 AM"
        })
        $("#saturaday11am").css("background", "orange");

        localStorage.setItem("saturaday11ambo", "true");
        $("#saturaday11am").css("background", "orange");
    })

    $("#SBS11AMC").click(function() {
        firebase.database().ref("slotSBS11AM/").remove()
        localStorage.removeItem("saturaday11ambo");
        $("#saturaday11am").css("background", "#fff");
    })
})
$("#saturaday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day6").text()} 12:00 PM`);
    var SBS12PMS = `<button class="btn btn-success" id="SBS12PMS">Shudele Appointment</button><br><br>`;
    var SBS12PMC = `<button class="btn btn-danger" id="SBS12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBS12PMS + SBS12PMC);

    $("#SBS12PMS").click(function() {
        firebase.database().ref("slotSBS12PM/").set({
            slotdate: $("#day6").text(),
            slottime: "12:00 PM"
        })
        localStorage.setItem("saturaday12pmbo", "true");
        $("#saturaday12pm").css("background", "orange");
    })

    $("#SBS12PMC").click(function() {
        firebase.database().ref("slotSBS12PM/").remove();
        localStorage.removeItem("saturaday12pmbo");
        $("#saturaday12pm").css("background", "#fff");
    })
})
$("#saturaday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day6").text()} 01:00 PM`);
    var SBS01PMS = `<button class="btn btn-success" id="SBS01PMS">Shudele Appointment</button><br><br>`;
    var SBS01PMC = `<button class="btn btn-danger" id="SBS01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBS01PMS + SBS01PMC);

    $("#SBS01PMS").click(function() {
        firebase.database().ref("slotSBS01PM/").set({
            slotdate: $("#day6").text(),
            slottime: "01:00 PM"
        })
        localStorage.setItem("saturaday1pmbo", "true");
        $("#saturaday1pm").css("background", "orange");
    })

    $("#SBS01PMC").click(function() {
        firebase.database().ref("slotSBS01PM/").remove();
        localStorage.removeItem("saturaday1pmbo");
        $("#saturaday1pm").css("background", "#fff");
    })
})
$("#saturaday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day6").text()} 02:00 AM`);
    var SBS02PMS = `<button class="btn btn-success" id="SBS02PMS">Shudele Appointment</button><br><br>`;
    var SBS02PMC = `<button class="btn btn-danger" id="SBS02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBS02PMS + SBS02PMC);

    $("#SBS02PMS").click(function() {
        firebase.database().ref("slotSBS02PM/").set({
            slotdate: $("#day6").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("saturaday2pmbo", "true");
        $("#saturaday2pm").css("background", "orange");
    })

    $("#SBS02PMC").click(function() {
        firebase.database().ref("slotSBS02PM/").remove();
        localStorage.removeItem("saturaday2pmbo");
        $("#saturaday2pm").css("background", "#fff");
    })
})

// Friday
$("#friday11am").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day5").text()} AM`);
    var SBF11AMS = `<button class="btn btn-success" id="SBF11AMS">Shudele Appointment</button><br><br>`;
    var SBF11AMC = `<button class="btn btn-danger" id="SBF11AMC">Remove Appointment</button>`;
    $(".modal-body").append(SBF11AMS + SBF11AMC);

    $("#SBF11AMS").click(function() {
        firebase.database().ref("slotSBF11AM/").set({
            slotdate: $("#day5").text(),
            slottime: "11:00 AM"
        })
        $("#friday11am").css("background", "orange");

        localStorage.setItem("friday11ambo", "true");
        $("#friday11am").css("background", "orange");
    })

    $("#SBF11AMC").click(function() {
        firebase.database().ref("slotSBF11AM/").remove()
        localStorage.removeItem("friday11ambo");
        $("#friday11am").css("background", "#fff");
    })
})
$("#friday12pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day5").text()} 12:00 PM`);
    var SBF12PMS = `<button class="btn btn-success" id="SBF12PMS">Shudele Appointment</button><br><br>`;
    var SBF12PMC = `<button class="btn btn-danger" id="SBF12PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBF12PMS + SBF12PMC);

    $("#SBF12PMS").click(function() {
        firebase.database().ref("slotSBF12PM/").set({
            slotdate: $("#day5").text(),
            slottime: "12:00 PM"
        })
        localStorage.setItem("friday12pmbo", "true");
        $("#friday12pm").css("background", "orange");
    })

    $("#SBF12PMC").click(function() {
        firebase.database().ref("slotSBF12PM/").remove();
        localStorage.removeItem("friday12pmbo");
        $("#friday12pm").css("background", "#fff");
    })
})
$("#friday1pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day5").text()} 01:00 PM`);
    var SBF01PMS = `<button class="btn btn-success" id="SBF01PMS">Shudele Appointment</button><br><br>`;
    var SBF01PMC = `<button class="btn btn-danger" id="SBF01PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBF01PMS + SBF01PMC);

    $("#SBF01PMS").click(function() {
        firebase.database().ref("slotSBF01PM/").set({
            slotdate: $("#day5").text(),
            slottime: "01:00 PM"
        })
        localStorage.setItem("friday1pmbo", "true");
        $("#friday1pm").css("background", "orange");
    })

    $("#SBF01PMC").click(function() {
        firebase.database().ref("slotSBF01PM/").remove();
        localStorage.removeItem("friday1pmbo");
        $("#friday1pm").css("background", "#fff");
    })
})
$("#friday2pm").click(function() {
    $(".modal-title").html(`Schedule Appointment at ${$("#day5").text()} 02:00 AM`);
    var SBF02PMS = `<button class="btn btn-success" id="SBF02PMS">Shudele Appointment</button><br><br>`;
    var SBF02PMC = `<button class="btn btn-danger" id="SBF02PMC">Remove Appointment</button>`;
    $(".modal-body").append(SBF02PMS + SBF02PMC);

    $("#SBF02PMS").click(function() {
        firebase.database().ref("slotSBF02PM/").set({
            slotdate: $("#day5").text(),
            slottime: "02:00 AM"
        })
        localStorage.setItem("friday2pmbo", "true");
        $("#friday2pm").css("background", "orange");
    })

    $("#SBF02PMC").click(function() {
        firebase.database().ref("slotSBF02PM/").remove();
        localStorage.removeItem("friday2pmbo");
        $("#friday2pm").css("background", "#fff");
    })
})

$(".cls").click(function() {
    $(".modal-body").empty();
});