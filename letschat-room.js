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

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

$(".draw-border").click(function(){
	localStorage.clear();
	window.location.replace("index.html");
})

$(document).ready(function() {
	var name = localStorage.getItem("user_name");
	$(".welcome").html(`Welcome ${name}!`);
});

$(".room-button").click(function() {
	var room_name = $(".room-name").val();
	localStorage.setItem("room_name", room_name);
	firebase.database().ref("/").child(room_name).set({
		purpose: "adding user name"
	});
	window.location = "letschat-page.html";
});

$(document).ready(function() {
	firebase.database().ref("/").on('value', function(snapshot) {
		$(".trending-rooms-group").html("");
		snapshot.forEach(function(childSnapshot){
			childKey = childSnapshot.key;
			Room_names = childKey;
			row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);'>  #"+ Room_names +"</div><hr>";
        	$(".trending-rooms-group").html(row);
		});
	});
});

function redirectToRoomName(name) {
	localStorage.setItem("room_name", name);
  	window.location = "letschat-page.html";
}