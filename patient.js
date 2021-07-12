function procress() {
  document.querySelector(".loader").classList.add("d-none");

  Notification.requestPermission();

  const notifi = new Notification("Paper Less", {
    body: "Have a good day",
    icon: './Logo.png'
  })

  setTimeout(() => notifi.close(), 100);
}

document.querySelector(".home").addEventListener("click", function() {
  document.querySelector(".home").classList.add("active");
  document.querySelector(".folder").classList.remove("active");
  document.querySelector(".comment").classList.remove("active");
  document.querySelector(".phone").classList.remove("active");
})

document.querySelector(".folder").addEventListener("click", function() {
  document.querySelector(".home").classList.remove("active");
  document.querySelector(".folder").classList.add("active");
  document.querySelector(".comment").classList.remove("active");
  document.querySelector(".phone").classList.remove("active");
})

document.querySelector(".comment").addEventListener("click", function() {
  document.querySelector(".home").classList.remove("active");
  document.querySelector(".folder").classList.remove("active");
  document.querySelector(".comment").classList.add("active");
  document.querySelector(".phone").classList.remove("active");
})

document.querySelector(".phone").addEventListener("click", function() {
  document.querySelector(".home").classList.remove("active");
  document.querySelector(".folder").classList.remove("active");
  document.querySelector(".comment").classList.remove("active");
  document.querySelector(".phone").classList.add("active");
})