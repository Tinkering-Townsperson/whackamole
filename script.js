/* Link the elements in the 
   HTML to the JS!
   Hint: Look at the demos or at the Rebar workshop
*/
const timerelement = document.getElementById("timer");
const mole = document.getElementById("mole");
const scoreelement = document.getElementById("score");
const resetbtn = document.getElementById("timer-button");

/* Initialize your variables.
   Hint: Keep track of a few different numbers
*/
let time = 2000;
let score = 0;

/* This function runs every 100th of a second.
   Use it to update the timer and run the game.
*/
function reset(){
   time = 2000;
   score = -1;
   relocate();
}
function timer() {
   if (time > 0){
      time--;
      timerelement.innerText = time;
   }
   console.log(time);
}

/* This will repeatedly run the timer function every 100th of a second. */
setInterval(timer, 1)

/* This will run every time the mole is clicked.
   You decide what this function should do!
*/
function relocate() {            // Line 26
   if (time > 0){            // Line 27
       score++;            // Line 28
       scoreelement.innerText = "Score: " +score; // Line 29

       let x = 5 + Math.random() * 90; // Line 31
       let y = 15 + Math.random() * 45; // Line 32
       mole.style.left = x+"%";     // Line 33
       mole.style.top = y+"%";      // Line 34
   }
}

/* Add a listener to the mole to run the relocate function */
mole.addEventListener("click", relocate);
resetbtn.addEventListener("click", reset);
