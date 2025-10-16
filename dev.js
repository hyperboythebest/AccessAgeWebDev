document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    this.reset();
  });
  
  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  