var firebaseConfig = {
    apiKey: "AIzaSyBRJebbIvB4gELwrfq0_XjAG6OejgXraww",
    authDomain: "paper-less-9ab8d.firebaseapp.com",
    databaseURL: "https://paper-less-9ab8d-default-rtdb.firebaseio.com",
    projectId: "paper-less-9ab8d",
    storageBucket: "paper-less-9ab8d.appspot.com",
    messagingSenderId: "849779728570",
    appId: "1:849779728570:web:2354acabbb54c91df0a283",
    measurementId: "G-Z1M5DRX6J4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
    localStorage.setItem("Doctor Specialist", $(".doctor-type-input").val())
    location.reload()
})