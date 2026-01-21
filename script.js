 function showNextStep(){
    document.getElementById('contact').style.display = 'none';
    document.getElementById('next-step').style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  }
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

<script>
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS dashboard se
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // e.g. service_gmail
    "template_admin",    // admin template
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Something went wrong. Try again.");
      console.error(error);
    }
  );
});
</script>
