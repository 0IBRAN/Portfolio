
// Select all feature cards
const cards = document.querySelectorAll(".selectable");

// Restore previously selected features
let selectedFeatures = JSON.parse(
  localStorage.getItem("selectedFeatures") || "[]"
);

// Update selection count
function updateCount() {
  const count = document.getElementById("selectionCount");

  if (count) {
    count.textContent = `${selectedFeatures.length} FEATURES SELECTED`;
  }
}

// Restore active card styling
cards.forEach(card => {
  const feature = card.dataset.feature;

  if (selectedFeatures.includes(feature)) {
    card.classList.add("active");
  }

  card.addEventListener("click", () => {
    card.classList.toggle("active");

    if (selectedFeatures.includes(feature)) {
      selectedFeatures = selectedFeatures.filter(
        item => item !== feature
      );
    } else {
      selectedFeatures.push(feature);
    }

    localStorage.setItem(
      "selectedFeatures",
      JSON.stringify(selectedFeatures)
    );

    updateCount();
  });
});

updateCount();
