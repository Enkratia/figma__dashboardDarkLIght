"use strict";var radioButtons=document.querySelectorAll(".toggle__wrapper input"),darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),setColorMode=function(){"dark"==localStorage.getItem("colorMode")?(setDarkMode(),darkButton.click()):"light"==localStorage.getItem("colorMode")?(setLightMode(),lightButton.click()):window.matchMedia("(prefers-color-scheme: dark)").matches?(setDarkMode(),document.querySelector("#dark").setAttribute("checked","")):(setLightMode(),document.querySelector("#light").setAttribute("checked",""))},setDarkMode=function(){document.querySelector("body").className="dark"},setLightMode=function(){document.querySelector("body").className="light"};setColorMode(),radioButtons.forEach((function(e){e.addEventListener("click",(function(e){"dark"===e.target.id?(localStorage.setItem("colorMode","dark"),setDarkMode()):"light"===e.target.id&&(localStorage.setItem("colorMode","light"),setLightMode())}))}));
//# sourceMappingURL=script.js.map