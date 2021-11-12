const toggleNav = document.querySelector(".nav-toggle");
const containerLinks = document.querySelector(".links-container");
const links = document.querySelector(".links");

// SET DATE
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// 1) NAVBAR smaller screen

toggleNav.addEventListener("click", () => {
  const containerLinksHeight = containerLinks.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerLinksHeight === 0) {
    containerLinks.style.height = `${linksHeight}px`;
  } else {
    containerLinks.style.height = 0;
  }
});

const navbar = document.querySelector("#nav");
const arrow = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    arrow.classList.add("show-link");
  } else {
    arrow.classList.remove("show-link");
  }
});

// 2) Smooth scrolling to section

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerLinksHeight = containerLinks.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerLinksHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    containerLinks.style.height = 0;
  });
});
