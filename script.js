 function showNextStep(){
    document.getElementById('contact').style.display = 'none';
    document.getElementById('next-step').style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }