fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single")
.then(data => data.json())
.then(data => write_data(data.joke));

// I searched for half an hour for a way to make a timer that resets every ay at midnight 
// but i didnt find one so i asked chatgpt for one and this is the one it gave me
// I then asked it to explain everything i didnt understand
// but I still cant get it to function so i give up for now i dont have enough time to fix this so
// I will turn in this unfinished

startDailyTimer(timerCallback);

function startDailyTimer(callback) {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to midnight
  
    let timeUntilMidnight = midnight - now;
  
    // Initial delay until midnight
    setTimeout(() => {
      // Execute the callback immediately when starting the timer
      callback();
  
      // Set up the timer to run every 24 hours
      setInterval(callback, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }, timeUntilMidnight);
  }
  
  function timerCallback() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to midnight
  
    let timeUntilMidnight = midnight - now;
  
    const hours = Math.floor(timeUntilMidnight / (60 * 60 * 1000));
    timeUntilMidnight -= hours * 60 * 60 * 1000;
    const minutes = Math.floor(timeUntilMidnight / (60 * 1000));
    timeUntilMidnight -= minutes * 60 * 1000;
    const seconds = Math.floor(timeUntilMidnight / 1000);
  
    let timerDisplay;
    if (hours >= 1) {
      timerDisplay = `${hours}:${minutes}`;
    } 
    else {
      timerDisplay = `${minutes}:${seconds}`;
    }
  
    document.getElementById("timer").innerHTML = "<p>" + timerDisplay + "</p>";
    // Update your UI with the timerDisplay
  
    fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single")
      .then(response => response.json())
      .then(data => write_data(data.joke))
      .catch(error => console.error('Error fetching joke:', error));
  }
  
  function write_data(obj) {
    let joke = obj;
    document.getElementById("jokeOfTheDay").innerHTML = joke;
  }
  
startDailyTimer(timerCallback);


// -------------------------------------------------------------------------
// this was the counter I was going to use before I realized that it wouldnt reset after it finished
// this one works and i can display the timer but its not what i wanted 
// you can test that this works just by uncommenting every thing below the lines and commenting everything above
// -------------------------------------------------------------------------
// let count = 6;

// fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single")
// .then(data => data.json())
// .then(data => write_data(data.joke));

// const timer = setInterval(function () {
//     count--;
//     console.log(count);
//     if(count > 3600) {
//         var time = Math.floor(count / 3600 ) + " H";
//     }
//     else if (count > 60 && count <= 3599) {
//         var time = Math.floor(count / 60) + " min"
//     }
//     else {
//         var time = count + " sec"
//     }
//     let timerdiv= document.getElementById("timer");
//     timerdiv.innerHTML = "<div>" + time + "</div>";
//     if (count === 0) {
//         clearInterval(timer);
//         document.getElementById("timer").innerHTML += "New joke's up!";
//         if (count >! 0) {
//             count = 86400;
//         }
//         let njcount = 60;
//         const njtimer = setInterval(function() {
//             njcount--;
//             if (njcount === 0) {
//                 document.getElementById("timer").innerHTML = "<div>" + time + "</div>";
//             }

//         }, 1000)
//         fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single")
//         .then(data => data.json())
//         .then(data => write_data(data.joke));
//     } 
// }, 1000);