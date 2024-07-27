var usernameInput= document.getElementById("username");
var username = usernameInput.ValueMax;

//Display the user name under the profile picture

var usernameDisplay = document.createElement("div");
usernameDisplay.innerHTML = username;
usernameDisplay.classList.add("username");
document.querySelector(".profile").appendChild(usernameDisplay);

