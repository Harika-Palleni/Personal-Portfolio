// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Active navigation while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Simple typing effect
const titles = [
    "Python Developer",
    "Web Developer",
    "Software Engineer"
];

let titleIndex = 0;
let charIndex = 0;

const heading = document.querySelector(".hero-text h2");

function typeEffect() {

    if (charIndex < titles[titleIndex].length) {

        heading.textContent += titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = titles[titleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        titleIndex++;

        if (titleIndex >= titles.length) {

            titleIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

heading.textContent = "";

typeEffect();

// Reveal sections while scrolling
const revealElements = document.querySelectorAll("section");

function reveal() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();

const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}else{
    toggleBtn.textContent = "🌙";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        toggleBtn.textContent = "☀️";
    }else{
        localStorage.setItem("theme","dark");
        toggleBtn.textContent = "🌙";
    }
});