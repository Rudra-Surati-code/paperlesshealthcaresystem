$(document).ready(function() {
    $(".loader").css('display', "none")
    $(".username").html(localStorage.getItem("name"))
})