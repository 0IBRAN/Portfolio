document.querySelectorAll(".selectable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
