var preloader = document.getElementById("body");

function loading() {
    preloader.style.display = "none";
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

$(function() {
    $(".btn").click(function() {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
    });
});

$(function() {
    $(".btn-signup").click(function() {
        name = document.getElementById("signup-name").value;
        email = document.getElementById("signup-email").value;

        if (name == "") {
            document.getElementById("error").innerHTML = "Please enter a valid name";
        } else if (localStorage.getItem("person") == null) {
            $("#error").text("Please select a what you are");
            $(".dropdownmenu").removeClass("d-none")
        } else if (email == "") {
            document.getElementById("error").innerHTML = "Please enter a valid email";
        } else {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            document.getElementById("error").innerHTML = "";
            $(".nav").toggleClass("nav-up");
            $(".form-signup-left").toggleClass("form-signup-down");
            $(".success").toggleClass("success-left");
            $(".frame").toggleClass("frame-short");
            window.location = "whatyouare.html";
        }
    });
});

$(function() {
    $(".btn-signin").click(function() {

    });
});

// 

document.getElementById('submit').addEventListener('click', function(inputText) {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (name == "") {
        document.getElementById("error").innerHTML = "Please enter a valid name";
    } else if (email == "") {
        document.getElementById("error").innerHTML = "Please enter a valid email";
    } else if (password == "") {
        document.getElementById("error").innerHTML = "Please enter a valid Password";
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("passowrd", passowrd);

        document.getElementById("error").innerHTML = "";

        window.location = "whatyouare.html";
    }
});

$("#dropdownmenuMain").click(function() {
    $(".dropdownmenu").toggleClass("d-none");
})

$(".doctor").click(function() {
    window.location = "doctor.html";
    localStorage.setItem("person", "doctor")
})
$(".patient").click(function() {
    window.location = "patient.html";
    localStorage.setItem("person", "patient")
})
$(".laboratatory").click(function() {
    window.location = "laboratatory.html";
    localStorage.setItem("person", "laboratory");
})
$(".ic").click(function() {
    window.location = "imaginecenter.html";
    localStorage.setItem("person", "imaginecenter");
})
$(".mc").click(function() {
    window.location = "medicalcenter.html";
    localStorage.setItem("person", "medicalstore");
})