var firebaseConfig = {
    apiKey: "AIzaSyDEVFkiLOkEcwwIr-3YgO_FBY5wbYYAIcU",
    authDomain: "paper-less-5c7a0.firebaseapp.com",
    databaseURL: "https://paper-less-5c7a0-default-rtdb.firebaseio.com",
    projectId: "paper-less-5c7a0",
    storageBucket: "paper-less-5c7a0.appspot.com",
    messagingSenderId: "20247367059",
    appId: "1:20247367059:web:1ae117fa5dfdaf1a2c6c66",
    measurementId: "G-8L7E8S91DR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const procress = () => {
    $(".loader").addClass("d-none")
    if(localStorage.getItem("email") == null) {
        if(localStorage.getItem("sp-hide") == null) {
            return;
        } else {
            $(".sp").addClass("d-none")
        }
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
                $(".error").html("We did't find that email address")
            } else if(document.getElementById("pass").value != data.password) {
                $(".error").html("Please Enter the correct password")
            } else {
                $(".spinner-border").removeClass("d-none")
                var checkEmail = document.getElementById("email").value.replaceAll("@", "adh").replaceAll(".", "dot");
                firebase.database().ref("Configration Database").child(checkEmail).on('value', (snapshot) => {
                        const data = snapshot.val();
                        localStorage.setItem('email', data.email);
                        localStorage.setItem('name', data.name);
                        localStorage.setItem('password', data.password);
                        localStorage.setItem('who', data.who)
                        $('.error').html("");

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

$(".spfirst").click(() => {
    $('.shot-1').addClass("d-none")
    $('.shot-2').removeClass("d-none")
})

$(".spsecond").click(() => {
    $('.shot-1').addClass("d-none")
    $('.shot-2').addClass("d-none")
    $(".shot-3").removeClass("d-none");
})

$(".end-section").click(() => {
    $(".sp").addClass("d-none")
    localStorage.setItem("sp-hide", "yes")
})