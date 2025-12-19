console.log("hello world");

welcomeMessage();

function welcomeMessage() {
  // Prompt user for their name
  const userInput = prompt("Please enter your name:");

  // Get the welcome message DOM element
  const welcomeDOM = document.getElementById("welcome-speech");

  if (!userInput || userInput.trim() === "") {
    welcomeDOM.innerHTML = "Welcome, Guest!";
    return;
  } else {
    welcomeDOM.innerHTML = "Welcome, " + userInput + "!";
  }

  function validateForm(name) {}
}
