const ls = localStorage;
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const themeBtnIcon = toggleThemeBtn.children[0];
const bodyEl = document.body;

const getLs = (key) => {
  return localStorage.getItem(key);
};

const setLs = (key, value) => {
  localStorage.setItem(key, value);
};

// If `theme-mode` isn't available in localStorage, set it's initial value to `light`
if (!getLs("theme-mode")) {
  setLs("theme-mode", "light");
}

bodyEl.setAttribute("data-theme-mode", getLs("theme-mode")); // Set `data-theme-mode` to `themeMode` for the body element

if (bodyEl.getAttribute("data-theme-mode") == "dark") {
  themeBtnIcon.classList.replace("fa-sun", "fa-moon");
}

window.onload = (e) => {
  // Add `click` listener for toggle theme button
  toggleThemeBtn.addEventListener("click", (e) => {
    if (getLs("theme-mode") == "light") {
      ls.setItem("theme-mode", "dark");
      themeBtnIcon.classList.replace("fa-sun", "fa-moon");
    } else {
      ls.setItem("theme-mode", "light");
      themeBtnIcon.classList.replace("fa-moon", "fa-sun");
    }

    bodyEl.setAttribute("data-theme-mode", getLs("theme-mode")); // Set `data-theme-mode` to `themeMode` for the body element
  });
};
