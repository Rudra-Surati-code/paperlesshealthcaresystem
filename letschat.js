// Styling Start

var button = document.getElementById('mainButton');

var openForm = function() {
	button.className = 'active';
};

var checkInput = function(input) {
	if (input.value.length > 0) {
		input.className = 'active';
	} else {
		input.className = '';
	}
};

var closeForm = function() {
	button.className = '';
};

document.addEventListener("keyup", function(e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		closeForm();
	}
});

// Styling Ends

function addUser() {
	user_name = document.getElementById("user_name").value;

	localStorage.setItem("user_name", user_name);

	window.location = "letschat-room.html";
}