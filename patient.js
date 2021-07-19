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