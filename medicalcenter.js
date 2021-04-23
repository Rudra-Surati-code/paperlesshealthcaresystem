var preloader = document.getElementById("body");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBB9q3c68b3NpODrzh2Y5iVrh17ngIupfo",
    authDomain: "paper-less-health-care-s-31077.firebaseapp.com",
    databaseURL: "https://paper-less-health-care-s-31077-default-rtdb.firebaseio.com",
    projectId: "paper-less-health-care-s-31077",
    storageBucket: "paper-less-health-care-s-31077.appspot.com",
    messagingSenderId: "543851857318",
    appId: "1:543851857318:web:d975ccb433f7f18ad77b67",
    measurementId: "G-8Y3NK2TGFQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function loading() {
    preloader.style.display = "none";

    getData();
}

function logout() {
    window.localStorage.clear();

    window.location = "index.html";
}

function getData() {
  firebase.database().ref("patient/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      document.getElementById("medecineStoreName").innerHTML = `These are the medicines for ${childData.name}`;
    });
});
  firebase.database().ref("doctor/").child("/").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      document.getElementById("medenineName").innerHTML = `${childData.pm}`;
    });
});
}