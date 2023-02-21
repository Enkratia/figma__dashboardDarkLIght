const radioButtons = document.querySelectorAll(".toggle__wrapper input");
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setColorMode = () => {
  if (localStorage.getItem("colorMode") == "dark") {
    setDarkMode();
    darkButton.click();
  } else if (localStorage.getItem("colorMode") == "light") {
    setLightMode();
    lightButton.click();
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode();
      document.querySelector("#dark").setAttribute("checked", "");
    } else {
      setLightMode();
      document.querySelector("#light").setAttribute("checked", "");
    }
  }
};

// const checkMode = () => {
//   if (localStorage.getItem("colorMode") == null) {
//     if (window.matchMedia("prefers-color-scheme: light").matches) {
//       lightButton.click();
//     } else if (window.matchMedia("prefers-color-scheme: dark").matches) {
//       darkButton.click();
//     }
//   }
// };

// const checkModeChange = () => {
//   window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
//     const colorScheme = e.matches ? "dark" : "light";
//     console.log(colorScheme);
//     checkMode();
//   });
// };

const setDarkMode = () => {
  document.querySelector("body").className = "dark";
};

const setLightMode = () => {
  document.querySelector("body").className = "light";
};

setColorMode();
// checkMode();
// checkModeChange();

radioButtons.forEach(button => {
  button.addEventListener("click", (e) => {

    if (e.target.id === "dark") {
      localStorage.setItem("colorMode", "dark");
      setDarkMode();
    } else if (e.target.id === "light") {
      localStorage.setItem("colorMode", "light");
      setLightMode();
    }
  });
});



