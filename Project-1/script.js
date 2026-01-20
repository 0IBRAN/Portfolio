document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("success").innerText = "Message sent successfully!";
});
