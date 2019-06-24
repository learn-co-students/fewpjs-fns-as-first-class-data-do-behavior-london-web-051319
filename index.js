/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timearray = time.split(":")  
  let times = parseInt(timearray[0]);
  if (times > 0 && times < 12) {
    return "Good Morning";
  }
  else if (times > 12 && times < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(args) {
  greeting = document.getElementById('greeting') 
  return greeting.innerText= args;
}