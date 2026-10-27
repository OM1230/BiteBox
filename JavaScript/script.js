function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (email === "admin@gmail.com" && password === "qwert") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", email);

    // Redirect to the home page
    window.location.href = "index.html";
  } else {
    error.innerText = "Invalid email or password";
  }
}

function showPassword() {
  let passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type="text";
  }else {
    passwordInput.type="text";
  }
}