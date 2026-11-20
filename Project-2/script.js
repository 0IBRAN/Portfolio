
// ===================================
// ATELIER - PROJECT CONFIGURATOR
// ===================================

// Selected website type
let selectedType = "";

// HTML elements
const typeCards = document.querySelectorAll(".type-card");

const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");

const nextOne = document.getElementById("nextOne");
const backOne = document.getElementById("backOne");
const backTwo = document.getElementById("backTwo");

const projectForm = document.getElementById("projectForm");
const finishButton = document.getElementById("finishButton");

const progressFill = document.getElementById("progressFill");
const stepLabel = document.getElementById("stepLabel");


// ===================================
// STEP 1 - SELECT WEBSITE TYPE
// ===================================

typeCards.forEach((card) => {

  card.addEventListener("click", () => {

    // Remove previous selection
    typeCards.forEach((item) => {
      item.classList.remove("selected");
    });

    // Select clicked card
    card.classList.add("selected");

    // Store selected type
    selectedType = card.dataset.type;

    // Enable continue button
    nextOne.disabled = false;

  });

});


// ===================================
// STEP NAVIGATION FUNCTION
// ===================================

function showStep(stepNumber) {

  stepOne.classList.add("hidden");
  stepTwo.classList.add("hidden");
  stepThree.classList.add("hidden");

  if (stepNumber === 1) {
    stepOne.classList.remove("hidden");
    progressFill.style.width = "33.33%";
    stepLabel.textContent = "STEP 01 / 03";
  }

  else if (stepNumber === 2) {
    stepTwo.classList.remove("hidden");
    progressFill.style.width = "66.66%";
    stepLabel.textContent = "STEP 02 / 03";
  }

  else if (stepNumber === 3) {
    stepThree.classList.remove("hidden");
    progressFill.style.width = "100%";
    stepLabel.textContent = "STEP 03 / 03";
  }

}


// ===================================
// CONTINUE TO STEP 2
// ===================================

nextOne.addEventListener("click", () => {

  if (!selectedType) {
    alert("Please select a website type.");
    return;
  }

  showStep(2);

});


// ===================================
// BACK TO STEP 1
// ===================================

backOne.addEventListener("click", () => {

  showStep(1);

});


// ===================================
// STEP 2 - FORM SUBMISSION
// ===================================

projectForm.addEventListener("submit", (event) => {

  event.preventDefault();

  // Get input values
  const projectName = document.getElementById("projectName").value.trim();

  const projectEmail = document.getElementById("projectEmail").value.trim();

  const projectDescription = document.getElementById("projectDescription").value.trim();

  const designStyle = document.getElementById("designStyle").value;

  // Basic validation
  if (
    !projectName ||
    !projectEmail ||
    !projectDescription ||
    !designStyle
  ) {

    alert("Please complete all fields.");
    return;

  }

  // Generate project summary
  document.getElementById("summaryType").textContent = selectedType;

  document.getElementById("summaryName").textContent = projectName;

  document.getElementById("summaryEmail").textContent = projectEmail;

  document.getElementById("summaryStyle").textContent = designStyle;

  document.getElementById("summaryDescription").textContent = projectDescription;

  // Show final step
  showStep(3);

});


// ===================================
// BACK TO STEP 2
// ===================================

backTwo.addEventListener("click", () => {

  showStep(2);

});


// ===================================
// RESET PROJECT
// ===================================

finishButton.addEventListener("click", () => {

  // Reset form
  projectForm.reset();

  // Clear selected website type
  selectedType = "";

  typeCards.forEach((card) => {
    card.classList.remove("selected");
  });

  // Disable continue button
  nextOne.disabled = true;

  // Return to first step
  showStep(1);

});


// ===================================
// INITIAL STATE
// ===================================

showStep(1);

console.log("ATELIER Studio is ready!");
