//Step 1
// Capture all 42 cells using a loop
// Add eventListener to each cells
// When clicked, make the cell turn blue

//Step 2 Alternate colors
//Create variable to assign a player
//Create if else statement
//If player = 1, player should be blue
//if player = 2, player should be pink

//Step 3 Create a reset button
//Capture the reset class/button
//Add eventListener so when it is click, all the cells turn white

const cells = document.querySelectorAll(".cell");
// console.log(cells);

const reset = document.querySelector(".reset");
// console.log(reset);

let Player = 1;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e) {
    if (Player === 1) {
      e.target.style.backgroundColor = "red";
      Player = 2;
    } else {
      e.target.style.backgroundColor = "yellow";
      Player = 1;
    }
    e.target.style.pointerEvents = "none";
  });
}

reset.addEventListener("click", function(e) {
  e.preventDefault();
  for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
    element.style.backgroundColor = "white";
    element.style.pointerEvents = "auto";
  }
});
