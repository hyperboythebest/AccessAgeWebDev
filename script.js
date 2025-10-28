// Smooth scroll to sections within page, fallback to contact.html
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'contact.html';
  }
}