const profileIcon = document.querySelector('.home-profile-alt');

// показать аватар на всех страницах
const savedAvatar = localStorage.getItem('avatar');
if (savedAvatar && profileIcon) {
  profileIcon.src = savedAvatar;
}

// === REGISTER ===
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  const avatarInput = document.getElementById('avatarInput');
  const avatarPreview = document.getElementById('avatarPreview');

  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        avatarPreview.src = reader.result;
        avatarPreview.style.display = 'block';
        localStorage.setItem('avatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Registration successful! You can now log in.');
    window.location.href = '../pages/login.html';
  });
}

// === LOGIN ===
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (loginEmail === savedEmail && loginPassword === savedPassword) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = '../pages/profile.html';
    } else {
      alert('Invalid email or password.');
    }
  });
}

// === PROFILE ===
const userName = document.getElementById('userName');
const avatarDisplay = document.getElementById('avatarDisplay');
const logoutBtn = document.getElementById('logoutBtn');

if (userName) {
  const isLoggedIn = localStorage.getItem('loggedIn');
  if (!isLoggedIn) {
    window.location.href = '../pages/login.html';
  } else {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const avatar = localStorage.getItem('avatar');
    userName.textContent = `Hello, ${firstName} ${lastName}!`;
    if (avatar) avatarDisplay.src = avatar;
  }
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '../pages/login.html';
  });
}
