
if (localStorage.getItem('username')) {
  showSecuredPage();
} else {
  showLoginForm();
}

function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if (username && password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful. You can now log in.');
    showLoginForm();
  } else {
    alert('Please fill in both fields.');
  }
}
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Validate user credentials
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    showSecuredPage();
  } else {
    alert('Invalid username or password.');
  }
}

// Logout the user
function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  showLoginForm();
}

// Show login form
function showLoginForm() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('securedPage').classList.add('hidden');
}

// Show secured page
function showSecuredPage() {
  document.getElementById('securedPage').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.add('hidden');
}
