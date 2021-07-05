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
}

function submit() {
    firebase.database().ref("Configration Database").child("/").on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            if(document.getElementById("email").value != data.email) {
                document.querySelector(".error").innerHTML = "Please enter correct Email"
            } else if(document.getElementById("pass").value != data.password) {
                document.querySelector(".error").innerHTML = "Please enter correct Password"
            } else {
                document.querySelector(".spinner-border").classList.remove("d-none")
                var checkEmail = document.getElementById("email").value.replace("@", "adh").replace(".", "dot");
                firebase.database().ref("Configration Database").child(checkEmail).on('value', (snapshot) => {
                        const data = snapshot.val();
                        localStorage.setItem("email", data.email);
                        localStorage.setItem("name", data.name);
                        localStorage.setItem("password", data.password);
                        localStorage.setItem("who", data.who)
                        document.querySelector(".error").innerHTML = "";

                        if(data.who == "Doctor") {
                            location.replace("doctor.html")
                        } else if (data.who == "Imagine Center") {
                            location.replace("imaginecenter.html")
                        } else if (data.who == "Laboratory") {
                            location.replace("laboratory.html")
                        } else if(data.who == "Medical Center") {
                            location.replace("medicalcenter.html")
                        } else {
                            location.replace("patient.html")
                        }
                });
            }
        });
    });
}