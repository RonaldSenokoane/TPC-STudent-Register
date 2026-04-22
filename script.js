const loginToggle = document.getElementById('loginToggle');
const managementToggle = document.getElementById('managementToggle');
const loginPage = document.getElementById('loginPage');
const managementPage = document.getElementById('managementPage');
const userLoginForm = document.getElementById('userLoginForm');
const managementLoginForm = document.getElementById('managementLoginForm');

function switchPage(page) {
  const isLogin = page === 'login';
  loginPage.classList.toggle('active-card', isLogin);
  managementPage.classList.toggle('active-card', !isLogin);
  loginToggle.classList.toggle('active', isLogin);
  managementToggle.classList.toggle('active', !isLogin);
}

function switchPage(page) {
  const isManagement = page === 'management login';
  loginPage.classList.toggle('active-card', !isManagement);
  managementPage.classList.toggle('active-card', isManagement);
  loginToggle.classList.toggle('active', !isManagement);
  managementToggle.classList.toggle('active', isManagement);
}

loginToggle.addEventListener('click', () => switchPage('login'));
managementToggle.addEventListener('click', () => switchPage('management'));

function showMessage(form, text, success = true) {
  const message = form.querySelector('.message');
  message.textContent = text;
  message.style.color = success ? '#a0e7b8' : '#f6a6a6';
}

userLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = userLoginForm.email.value.trim();
  const password = userLoginForm.password.value.trim();

  if (!email || !password) {
    showMessage(userLoginForm, 'Please enter both email and password.', false);
    return;
  }

  showMessage(userLoginForm, `Signed in successfully as ${email}.`);
});

managementLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = managementLoginForm.username.value.trim();
  const password = managementLoginForm.password.value.trim();

  if (!username || !password) {
    showMessage(managementLoginForm, 'Enter username and password to continue.', false);
    return;
  }

  showMessage(managementLoginForm, `Management access granted for ${username}.`);
});