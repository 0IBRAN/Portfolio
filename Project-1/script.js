// document.getElementById("contactForm").addEventListener("submit", function(e){
//   e.preventDefault();
//   document.getElementById("success").innerText = "Message sent successfully!";
// });



const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const contactForm = document.getElementById("contactForm");
const success = document.getElementById("success");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  success.textContent =
    "Thank you! Your demo form was submitted successfully.";

  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
