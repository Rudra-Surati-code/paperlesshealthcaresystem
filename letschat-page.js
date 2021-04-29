 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjRn8KrH6V9HWKPWA2c1QmcgFnG4BjGZU",
    authDomain: "let-s-chat-web-app-fcf78.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-fcf78-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-fcf78",
    storageBucket: "let-s-chat-web-app-fcf78.appspot.com",
    messagingSenderId: "564402711275",
    appId: "1:564402711275:web:02691c8aad3c891ef66cae",
    measurementId: "G-FY6TBTD70B"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

$(".draw-border").click(function(){
  localStorage.clear();
  window.location.replace("index.html");
});