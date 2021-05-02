var preloader = document.getElementById("body");

function loading() {
    preloader.style.display = "none";
    if(localStorage.getItem("name") == null == false && localStorage.getItem("email") == null == false) {
        if (localStorage.getItem("person") == "doctor") {
        window.location = "doctor.html";
    } else if (localStorage.getItem("person") == "patient") {
        window.location = "patient.html";
    } else if (localStorage.getItem("person") == "laboratory") {
        window.location = "labotatory.html";
    } else if (localStorage.getItem("person") == "imaginecenter") {
        window.location = "imaginecenter.html";
    } else if (localStorage.getItem("person") == "medicalstore") {
        window.location = "medicalcenter.html";
    }
    }
}

$(".gh").click(function() {
    $(".gj").toggleClass("d-none");
    $(".gjffj").toggleClass("d-none");
})

$(".doctor").click(function() {
    localStorage.setItem("person", "doctor");
});

$(".patient").click(function() {
    localStorage.setItem("person", "patient");
});

$(".laboratory").click(function() {
    localStorage.setItem("person", "laboratory");
});

$(".imaginecenter").click(function() {
    localStorage.setItem("person", "imaginecenter");
});

$(".medicalstore").click(function() {
    localStorage.setItem("person", "medicalstore");
});

$("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();

    if (name == "") {
        $(".error").text("Please enter a name");
    } else if (email == "") {
        $(".error").text("Please enter an email");
    } else if (localStorage.getItem("person") == null) {
        $(".error").text("Please Select Who are you")
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        if (localStorage.getItem("person") == "doctor") {
            window.location = "doctor.html";
        } else if (localStorage.getItem("person") == "patient") {
            window.location = "patient.html";
        } else if (localStorage.getItem("person") == "laboratory") {
            window.location = "labotatory.html";
        } else if (localStorage.getItem("person") == "imaginecenter") {
            window.location = "imaginecenter.html";
        } else if (localStorage.getItem("person") == "medicalstore") {
            window.location = "medicalcenter.html";
        }
    }
})

setTimeout(function() {
    $("#welcome").css("display", "none");
}, 3000)