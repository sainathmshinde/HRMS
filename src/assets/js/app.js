const authCard = document.getElementById("authCard");
const showSignUpBtn = document.getElementById("showSignUp");
const showSignInBtn = document.getElementById("showSignIn");

// Show Sign Up form
if (showSignUpBtn) {
  showSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    authCard.classList.add("show-signup");
  });
}

// Show Sign In form
if (showSignInBtn) {
  showSignInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    authCard.classList.remove("show-signup");
  });
}
