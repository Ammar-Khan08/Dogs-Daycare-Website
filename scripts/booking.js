/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded? Yes
// When do they need to be reset or updated?
let fullDayCost = 35;
let halfDayCost = 20;
let selectedDays = [];

const dayButtons = document.querySelectorAll(".day-selector li");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const calculatedCost = document.getElementById("calculated-cost");
const clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function updateSelectedDays(day) {
  if (!selectedDays.includes(day)) {
    selectedDays.push(day);
  }
}


dayButtons.forEach(function(dayButton) {
  dayButton.addEventListener("click", function(event) {
    let selectedDay = event.target.id;
    if (!event.target.classList.contains("clicked")) {
      event.target.classList.add("clicked");
      updateSelectedDays(selectedDay);
      updateCost();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
  dayButtons.forEach(function(dayButton) {
    dayButton.classList.remove("clicked");
  });
  selectedDays = [];
  calculatedCost.innerHTML = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function() {
  halfDayCost = 35;
  fullDayCost = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", function() {
  fullDayCost = 35;
  halfDayCost = 20;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  updateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    let numberOfDays = selectedDays.length;
    let cost = numberOfDays * fullDayCost;
    calculatedCost.innerHTML = cost;
  }