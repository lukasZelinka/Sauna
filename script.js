const toggleNav = document.querySelector(".nav-toggle");
const containerLinks = document.querySelector(".links-container");
const links = document.querySelector(".links");
const logo = document.querySelector(".logo");
const navbar = document.querySelector("#nav");
const arrow = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");
const gellery_section = document.getElementById("pictures");
const gallery_a = document.getElementById("gallery_a");

//  navbar -  smaller screen

toggleNav.addEventListener("click", () => {
  const containerLinksHeight = containerLinks.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerLinksHeight === 0) {
    containerLinks.style.height = `${linksHeight}px`;
  } else {
    containerLinks.style.height = 0;
  }
});

logo.addEventListener("click", () => {
  containerLinks.style.height = 0;
});

// back to top

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    arrow.classList.add("show-link");
  } else {
    arrow.classList.remove("show-link");
  }
});

//  scrolling to the section with  fixed navbar

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerLinksHeight = containerLinks.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (navHeight > 60) {
      position = position + containerLinksHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    containerLinks.style.height = 0;
  });
});
