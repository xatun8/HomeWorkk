// const start = Date.now();
// const end = start + 300000; // 5 minutes in milliseconds

// const speedometer = setInterval(() => {
//   const currentTime = Date.now();
//   const timeRemaining = end - currentTime;

//   if (timeRemaining <= 0) {
//     clearInterval(speedometer);
//     console.log("Speedometer finished");
//   } else {
//     const secondsRemaining = Math.ceil(timeRemaining / 1000);
//     const minutes = Math.floor(secondsRemaining / 60);
//     const seconds = secondsRemaining % 60;
//     const formattedSeconds = seconds.toString().padStart(2, "0"); // add leading zero
//     const timeString = `${minutes}:${formattedSeconds}`;
//     console.log(timeString);
//   }
// }, 1000);

// const now = new Date();
// const hour = now.getHours();
// const minute = now.getMinutes();

// if (hour >= 10 && hour < 15 && minute >= 5) {
//   // start the speedometer
// } else {
//   console.log("Cannot start speedometer. Current time is not within range.");
// }



// // Get the current timestamp in milliseconds
// const startTimestamp = new Date();

// // Define the maximum duration in milliseconds (5 minutes)
// const maxDuration = 300000;

// // Define a function to update the stopwatch
// function updateStopwatch() {

//   // Get the current timestamp in milliseconds
//   const currentTimestamp = Date.now();

//   // Calculate the elapsed time in milliseconds
//   const elapsedTime = currentTimestamp - startTimestamp;

//   // If the elapsed time is less than the maximum duration
//   if (elapsedTime < maxDuration) {

//     // Schedule the next update of the stopwatch
//     setTimeout(updateStopwatch, 1);

//     // Calculate the minutes, seconds, and milliseconds from the elapsed time
//     const minutes = (elapsedTime / 60000) | 0;
//     const seconds = ((elapsedTime % 60000) / 1000) | 0;
//     const milliseconds = elapsedTime % 1000;

//     // Add leading zero to milliseconds if necessary
//     const formattedMilliseconds = ('00' + milliseconds).slice(-3);

//     // Print the time in the console
//     console.log(`${minutes}:${seconds}.${formattedMilliseconds}`);

//   }
// }

// // Start the stopwatch after the code runs
// setTimeout(updateStopwatch, 0);









