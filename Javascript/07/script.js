// var h2tag = document.querySelector("h2");

// setTimeout(function() {
//     h2tag.classList.add("available");
// }, 3000);

// setTimeout(function() {
//     h2tag.classList.remove("available");
// }, 6000);

// var image = document.querySelector("img");
// image.setAttribute("id", "cat-image");

// var anotherh2 = document.querySelector(".simple-h2");
// console.log(anotherh2);
// anotherh2.style.backgroundColor = "red";

// var h2 = document.createElement("h2");
// var value = document.createTextNode("Hello World");

// h2.appendChild(value);

// document.body.appendChild(h2);

// ================= WEB STORAGE ==================

var theme = "light";
var themeChangerLight = document.getElementById("theme-changer-light");
var themeChangerDark = document.getElementById("theme-changer-dark");

themeChangerLight.addEventListener("click", function() {
    localStorage.setItem("theme", "light");
    let theme = localStorage.getItem("theme");
    ListenForThemeChange(theme);
});

themeChangerDark.addEventListener("click", function() {
    localStorage.setItem("theme", "dark");
    let theme = localStorage.getItem("theme");
    ListenForThemeChange(theme);
});

const ListenForThemeChange = (theme) => {
    console.log(`On load theme is ${theme}`);
    if(theme === "dark"){
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}

var themeOnLoad = localStorage.getItem("theme");

ListenForThemeChange(themeOnLoad);
