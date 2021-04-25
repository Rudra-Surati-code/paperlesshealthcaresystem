var preloader = document.getElementById("body");

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
      document.getElementById("ImagineCenterName").innerHTML = `These are the Reports and others things for ${childData.name}`;
    });
});
firebase.database().ref("doctor/").child("prescriptionImagineCenter").on('value', gotData);
}

function gotData(data) {
    document.getElementById("ImagineCenterDName").innerHTML = data.val().pic;
}

function uploadImagineCenterReport() 
{
  const input = document.getElementById("inputFile");

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            firebase.database().ref("imaginecenter/").child("imaginecenterReport").set({
                imaginecenterReport : reader.result
            })
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function sendIMReport() {
    document.getElementById("imagineCenterReport").classList.remove("d-none");
    firebase.database().ref("imaginecenter/").child("/").on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          document.getElementById("imgShow").src = `${childData.imaginecenterReport}`;
        });
      });
    window.location = "#imagineCenterReport";
}