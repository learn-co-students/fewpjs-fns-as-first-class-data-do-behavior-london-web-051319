/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time)
{
  const hour = time.split(':')[0];
  const hourInt = parseInt(hour);

  if(hourInt< 12){
    return "Good Morning";
  }else if(hourInt > 12 && hourInt < 17){
    return "Good Afternoon";
  }
  else if(hourInt > 5){
    return "Good Evening";
  }
}
let testContent = "TEST";

function displayMessage(text)
{
  const h1 = document.getElementById("greeting");
  h1.innerText = text;
}

displayMessage(testContent);
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
