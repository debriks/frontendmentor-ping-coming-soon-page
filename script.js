const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form["email"];
  const emailValue = email.value;
  const small = form.querySelector("small");

  if (!isValidEmail(emailValue)) {
    // input value is invalid
    email.classList.add("error");
    small.innerText = "Please provide a valid email address";
    small.style.display = "inline-block";
    // input value is empty
  } else if (!emailValue) {
    email.classList.add("error");
    small.innerText = "Email field cannot be empty";
    small.style.display = "inline-block";
  } else {
    // input value is correct
    email.classList.remove("error");
    small.innerText = "";
    small.style.display = "none";
  }
});

// function that checks if email is valid
function isValidEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
