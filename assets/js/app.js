const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

// Show the mobile menu when the menu is clicked
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// Close the menu after a link is clicked
navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

