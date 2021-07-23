$(document).ready(function() {
    $(".loader").css('display', "none")
    $(".username").html(localStorage.getItem("name"));
    if(localStorage.getItem("Doctor Specialist") == null) {
        console.log()
    } else {
        $(".doctor-type").css('display', "none");
    }
})

$(".doctor-type-input-button").click(function() {
    const letters = /^[A-Za-z]+$/;
    if($(".doctor-type-input").val() != letters) {
        $(".error-doctor-type-input").html("Please Enter Correct Doctor Specialist")
    } else {
        localStorage.setItem("Doctor Specialist", $(".doctor-type-input").val())
        location.reload()
    }
})