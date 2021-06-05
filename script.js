const switchToggleBtn = document.querySelector(".switch-toggle-background");

let currentTheme = 1;
function switchToggle() {
  currentTheme++;
  switchToggleBtn.className = `switch-toggle-background switch-toggle-background--${currentTheme}`;
  if (currentTheme > 3) {
    currentTheme = 1;
  }
  document.documentElement.setAttribute("data-theme", `${currentTheme}`);
}

switchToggleBtn.addEventListener("click", switchToggle);
