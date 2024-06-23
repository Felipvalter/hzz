const passwordForm = document.getElementById('password-form');
const protectedContent = document.getElementById('protected-content');
const correctPassword = 'mysecretpassword'; // Replace with your desired password

passwordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const enteredPassword = document.getElementById('password').value;
  if (enteredPassword === correctPassword) {
    protectedContent.style.display = 'block'; // Show the protected content
  } else {
    alert('Incorrect password!');
  }
});