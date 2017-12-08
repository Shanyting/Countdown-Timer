// the countDownDate DEPENDS ON THE TIME YOU WANT
// time must be in military time (time to 24 hours)
let countDownDate = new Date("Dec 4, 2017 13:20:20").getTime();

// update the countdown every second
let x = setInterval(function() {
  let now = new Date().getTime();

  let distance = countDownDate - now;

// 1000 = number of milliseconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // hours, minutes, and seconds are finding the remainder from the previous time amount
  let hours = Math.floor(distance % (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60));
  let seconds = Math.floor(distance % (1000));

// display te result in the paragraphs where we put this countdown timer
  let countdown = document.getElementById("demo")
  countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

// if the countdown is finished, tell the user so
  if (distance < 0) {
    // built in method that stops the loop (stops the time)
    clearInterval(x);
    countdown.innerHTML = "TIMES UP!"
  }
}, 0) // starts the loop of the setInterval function at 0 milliseconds