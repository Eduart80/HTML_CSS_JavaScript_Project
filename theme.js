
document.addEventListener('DOMContentLoaded', function() {
  const moonImg = document.getElementById('moon');
  const theme = document.getElementById('mode');
  const themeToggle = document.getElementById('theme-toggle');

  // save theme on localStorage
  const savedTheme = localStorage.getItem('theme');
  //get 
  if (savedTheme === 'dark-mode') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    moonImg.src = './images/moonLight.png';
    moonImg.alt = 'moonDark';
    theme.innerHTML = 'Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    moonImg.src = './images/moonDark.png';
    moonImg.alt = 'moonLight';
    theme.innerHTML = 'Dark Mode';
  }

  themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      moonImg.src = './images/moonDark.png';
      moonImg.alt = 'moonLight';
      theme.innerHTML = 'Dark Mode';
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      moonImg.src = './images/moonLight.png';
      moonImg.alt = 'moonDark';
      theme.innerHTML = 'Light Mode';
      localStorage.setItem('theme', 'dark-mode');
    }
  });
});