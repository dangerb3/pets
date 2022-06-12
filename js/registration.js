const eyeBtn = document.querySelector(".eye-icon");
eyeBtn.addEventListener("click", () => {
  const input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    eyeBtn.classList.add("eye-active");
    input.setAttribute("type", "text");
  } else {
    eyeBtn.classList.remove("eye-active");
    input.setAttribute("type", "password");
  }
});
