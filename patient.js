function loader() {
  $(".loader").addClass("d-none");
}

function procress() {
  $(".username").text(localStorage.getItem("name"));
  loader()
  var logoname = localStorage.getItem("name")[0]
  $(".userlogo").text(logoname)
}

$(".home").click(function() {
  $(".home").addClass("active");
  $(".folder").removeClass("active");
  $(".comment").removeClass("active");
  $(".phone").removeClass("active");

  // 

  $(".home-section").removeClass("d-none")
  $(".appointment-section").addClass("d-none")
  $(".chat-remainder-section").addClass("d-none")
  $(".appointment-calling-section").addClass("d-none")
})

$(".folder").click(function() {
  $(".home").removeClass("active");
  $(".folder").addClass("active");
  $(".comment").removeClass("active");
  $(".phone").removeClass("active");

  // 

  $(".home-section").addClass("d-none")
  $(".appointment-section").removeClass("d-none")
  $(".chat-remainder-section").addClass("d-none")
  $(".appointment-calling-section").addClass("d-none")
})

$(".comment").click(function() {
  $(".home").removeClass("active");
  $(".folder").removeClass("active");
  $(".comment").addClass("active");
  $(".phone").removeClass("active");

  // 

  $(".home-section").addClass("d-none")
  $(".appointment-section").addClass("d-none")
  $(".chat-remainder-section").removeClass("d-none")
  $(".appointment-calling-section").addClass("d-none")
})

$(".phone").click(function() {
  $(".home").removeClass("active");
  $(".folder").removeClass("active");
  $(".comment").removeClass("active");
  $(".phone").addClass("active");

  // 

  $(".home-section").addClass("d-none")
  $(".appointment-section").addClass("d-none")
  $(".chat-remainder-section").addClass("d-none")
  $(".appointment-calling-section").removeClass("d-none")
})

// Appo

$(".upcomming-button").click(function() {
  $(".upcomming-button").addClass("active-schedule-button-option")
  $(".completed-button").removeClass("active-schedule-button-option");
  $(".canceled-button").removeClass("active-schedule-button-option");

  $(".appointment-schedule-upcomming").removeClass("d-none")
  $(".appointment-schedule-completed").addClass("d-none");
  $(".appointment-schedule-cancel").addClass("d-none");
})

$(".completed-button").click(function() {
  $(".upcomming-button").removeClass("active-schedule-button-option")
  $(".completed-button").addClass("active-schedule-button-option");
  $(".canceled-button").removeClass("active-schedule-button-option");

  $(".appointment-schedule-upcomming").addClass("d-none")
  $(".appointment-schedule-completed").removeClass("d-none");
  $(".appointment-schedule-cancel").addClass("d-none");
})

$(".canceled-button").click(function() {
  $(".upcomming-button").removeClass("active-schedule-button-option")
  $(".completed-button").removeClass("active-schedule-button-option");
  $(".canceled-button").addClass("active-schedule-button-option");

  $(".appointment-schedule-upcomming").addClass("d-none")
  $(".appointment-schedule-completed").addClass("d-none");
  $(".appointment-schedule-cancel").removeClass("d-none");
})

$(".sh-button").click(function() {
  $(".schedule-appointment").removeClass("d-none");
  $(".data-list").addClass("d-none");
  $(".sche").addClass("d-none");
})

$(".at-back").click(function() {
  $(".schedule-appointment").addClass("d-none");
  $(".data-list").removeClass("d-none");
  $(".sche").removeClass("d-none");
})

$(".data-list-doctors-list").click(function() {
  $(".doctors-list-name-sa").removeClass("d-none");
  $(".doctors-list").addClass("d-none");
  $(".sah").addClass("d-none");
})

$(".ats-back").click(function() {
  $(".doctors-list-name-sa").addClass("d-none");
  $(".doctors-list").removeClass("d-none");
  $(".sah").removeClass("d-none");
})

// Comment and Notification

$(".doctor-chat-name-card").click(function() {
  console.log()
})