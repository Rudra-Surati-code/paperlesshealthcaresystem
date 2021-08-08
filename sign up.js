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

const procress = () => {
    document.querySelector(".loader").classList.add("d-none")
    if(localStorage.getItem("email") == null) {
        console.log("paper less")
    } else {
        if(localStorage.getItem("who") == "Doctor") {
            location.replace("doctor.html")
        } else if (localStorage.getItem("who") == "Imagine Center") {
            location.replace("imaginecenter.html")
        } else if (localStorage.getItem("who") == "Laboratory") {
            location.replace("laboratory.html")
        } else if(localStorage.getItem("who") == "Medical Center") {
            location.replace("medicalcenter.html")
        } else {
            location.replace("patient.html")
        }
    }

    async function fetchCountriesAPI() {
        let response = await fetch("https://restcountries.eu/rest/v2/all");
        let data = await response.text();
        let array = JSON.parse(data)
    
        let keys = Object.keys(array);
        for (let i = 0; i < keys.length; i++) {
            let val = array[keys[i]];
            $(".cn").append(`<li class="dropdown-item lucario">${val.name}</li>`);

            $('li[class*="lucario"]').click(function() {
                localStorage.setItem("location", this.textContent);
                $(".countries").html(this.textContent);
            })
        }
    }
    
    fetchCountriesAPI()
}

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
    } else if(localStorage.getItem("location") == null) {
        document.querySelector(".error").innerHTML = "Please Select Your Location"
    } else {
        var replies = document.querySelector("#email").value.replaceAll("@", "adh").replaceAll(".", "dot");
        firebase.database().ref("Configration Database"+"/").child(replies).on("value", (snapshot) => {
            if (snapshot.exists()) {
              document.querySelector(".error").innerHTML = "This email has already exist! Please Select The Different Email"
            } else {
                document.querySelector(".error").innerHTML = ""
                firebase.database().ref("Configration Database").child(replies).set({
                    name: `${document.getElementById("fname").value} ${document.getElementById("lname").value}`,
                    email: document.getElementById("email").value,
                    password: document.getElementById("pass").value,
                    who: localStorage.getItem("who"),
                    location: localStorage.getItem("location")
                })
                document.querySelector(".spinner-border").classList.remove("d-none")
                localStorage.setItem('name', `${document.getElementById("fname").value} ${document.getElementById("lname").value}`)
                localStorage.setItem('email', document.getElementById("email").value)
                localStorage.setItem("password", document.getElementById("pass").value)
                document.querySelector(".error").innerHTML = "";
                if(localStorage.getItem("who") == "Doctor") {
                    location.replace("doctor.html")
                } else if (localStorage.getItem("who") == "Imagine Center") {
                    location.replace("imaginecenter.html")
                } else if (localStorage.getItem("who") == "Laboratory") {
                    location.replace("laboratory.html")
                } else if(localStorage.getItem("who") == "Medical Center") {
                    location.replace("medicalcenter.html")
                } else {
                    location.replace("patient.html")
                }
            }
        })
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