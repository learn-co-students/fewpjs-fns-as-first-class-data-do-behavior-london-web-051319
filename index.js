/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
   let timeArray = timeString.split(":");
   if (timeArray[0] < 12) {
      greeting = "Good Morning";
   } else if (timeArray[0] >= 12 && timeArray[0] < 17) {
      greeting = "Good Afternoon";
   } else {
      greeting = "Good Evening";
   }
   return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
   let content = document.getElementById("greeting");
   content.innerText = string;
}
