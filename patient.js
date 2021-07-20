function loader() {
  $(".loader").addClass("d-none");
}

function procress() {
  $(".username").text(localStorage.getItem("name"));
  // setInterval(loader, 7000)
  loader();

  async function API() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.text();

    console.log(data);
  }

  API()
}

$(".home").click(function() {
  $(".home").addClass("active");
  $(".folder").removeClass("active");
  $(".comment").removeClass("active");
  $(".phone").removeClass("active");

  // 

  $(".home-section").removeClass("d-none")
  $(".appointment-section").addClass("d-none")
})

$(".folder").click(function() {
  $(".home").removeClass("active");
  $(".folder").addClass("active");
  $(".comment").removeClass("active");
  $(".phone").removeClass("active");

  // 

  $(".home-section").addClass("d-none")
  $(".appointment-section").removeClass("d-none")
})

$(".comment").click(function() {
  $(".home").removeClass("active");
  $(".folder").removeClass("active");
  $(".comment").addClass("active");
  $(".phone").removeClass("active");
})

$(".phone").click(function() {
  $(".home").removeClass("active");
  $(".folder").removeClass("active");
  $(".comment").removeClass("active");
  $(".phone").addClass("active");
})

// Appo

$(".upcomming-button").click(function() {
  $(".upcomming-button").addClass("active-schedule-button-option")
  $(".completed-button").removeClass("active-schedule-button-option");
  $(".canceled-button").removeClass("active-schedule-button-option");
})

$(".completed-button").click(function() {
  $(".upcomming-button").removeClass("active-schedule-button-option")
  $(".completed-button").addClass("active-schedule-button-option");
  $(".canceled-button").removeClass("active-schedule-button-option");
})

$(".canceled-button").click(function() {
  $(".upcomming-button").removeClass("active-schedule-button-option")
  $(".completed-button").removeClass("active-schedule-button-option");
  $(".canceled-button").addClass("active-schedule-button-option");
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