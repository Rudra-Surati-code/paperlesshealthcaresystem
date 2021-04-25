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
      document.getElementById("LaboratoryName").innerHTML = `These are the Reports and others things for ${childData.name}`;
    });
});
firebase.database().ref("doctor/").child("prescriptionLaboratory").on('value', gotData);
}

function gotData(data) {
    document.getElementById("laboratoryDName").innerHTML = data.val().pl;
}

function uploadLaboratoryReport() 
{
  const input = document.getElementById("inputFile");

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            firebase.database().ref("laboratatory/").child("laboratatoryReport").set({
                laboratatoryReport : reader.result
            })
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function sendLaboratatoryReport() {
    document.getElementById("laboratoryReport").classList.remove("d-none");
    firebase.database().ref("laboratatory/").child("/").on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          document.getElementById("imgShow").src = `${childData.laboratatoryReport}`;
        });
      });
    window.location = "#laboratoryReport";
}