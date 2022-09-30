//Start with Second Hand because it moves the most
//Create a setDate function and make it run every second by using setInterval
function setDate() {
  const now = new Date();
  //get current date
  const seconds = now.getSeconds();
  // getSeconds() method returns the seconds in the specified date according to local time. Range: 0-59

  //now how do we turn the second to a degree to show on the clock.
  //add 90 is because we first set the starting hand position at 90s degree, in css file, line 50
  const secondsDegrees = (seconds / 60) * 360 + 90;
  // grab secondHand using querySelector outside of this function
  secondHand.style.transform = `rotate(${secondsDegrees}deg) `;
  // confusing? this is the format - transform: rotate(90deg); 90 is dynamic now
  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins);

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(hours);
}

setInterval(setDate, 1000);

const secondHand = document.querySelector(".second-hand");

const minHand = document.querySelector(".min-hand");

const hourHand = document.querySelector(".hour-hand");
