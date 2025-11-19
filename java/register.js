const form = document.getElementById('registerForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!firstName || !lastName || !email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Сохраняем данные в localStorage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('loggedIn', 'true');

  alert('Registration successful!');
  window.location.href = '../pages/profile.html';
});
