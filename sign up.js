const firebaseConfig = {
    apiKey: "AIzaSyCk5s2RXo09ai0yHEvv8PVC7P_FsgA0dJk",
    authDomain: "paper-less-sign-in-and-sign-up.firebaseapp.com",
    databaseURL: "https://paper-less-sign-in-and-sign-up-default-rtdb.firebaseio.com",
    projectId: "paper-less-sign-in-and-sign-up",
    storageBucket: "paper-less-sign-in-and-sign-up.appspot.com",
    messagingSenderId: "706828671055",
    appId: "1:706828671055:web:133a0e1193fa42aeb9f23a",
    measurementId: "G-7G58N240JQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const submit = () => {
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!letters.test(document.getElementById("fname").value)) {
        document.querySelector(".error").innerHTML = "Please Enter a valid First Name"
    } else if (!letters.test(document.getElementById("lname").value)) {
        document.querySelector(".error").innerHTML = "Please Enter a valid Last Name"
    } else if (!filter.test(document.getElementById("email").value)) {
        document.querySelector(".error").innerHTML = "Please Enter a valid Email"
    } else if (!pwd_expression.test(document.getElementById("pass").value)) {
        document.querySelector(".error").innerHTML = "Please Enter a valid Password"
    } else if (localStorage.getItem("who") == null) {
        document.querySelector(".error").innerHTML = "Please Select Who are You"
    } else {
        setInterval(checkSubmit(), 1000);
    }
}

function checkSubmit() {
    var repla = document.querySelector("#email").value.replace("@", "adh").replace(".", "dot");
    firebase.database().ref(repla).set({
        name: `${document.getElementById("fname").value} ${document.getElementById("lname").value}`,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        who: localStorage.getItem("who"),
    })
    document.querySelector(".spinner-border").classList.remove("d-none")

    if(localStorage.getItem("firebase:previous_websocket_failure") == "true") {
        document.querySelector(".spinner-border").classList.remove("d-none")
    } else {
        document.querySelector(".spinner-border").classList.add("d-none")
        localStorage.setItem('name', `${document.getElementById("fname").value} ${document.getElementById("lname").value}`)
        localStorage.setItem('email', document.getElementById("email").value)
        localStorage.setItem("password", document.getElementById("pass").value)
        location.replace("index.html")
    }
}

document.querySelector(".doctor").addEventListener("click", function() {
    localStorage.setItem("who", "Doctor");
    document.querySelector(".selecting").innerHTML = "Doctor";
})

document.querySelector(".imagine-center").addEventListener("click", function() {
    localStorage.setItem("who", "Imagine Center");
    document.querySelector(".selecting").innerHTML = "Imagine Center";
})

document.querySelector(".laboratory").addEventListener("click", function() {
    localStorage.setItem("who", "Laboratory");
    document.querySelector(".selecting").innerHTML = "Laboratory";
})

document.querySelector(".medical-center").addEventListener("click", function() {
    localStorage.setItem("who", "Medical Center");
    document.querySelector(".selecting").innerHTML = "Medical Center";
})

document.querySelector(".patient").addEventListener("click", function() {
    localStorage.setItem("who", "Patient");
    document.querySelector(".selecting").innerHTML = "Patient";
})