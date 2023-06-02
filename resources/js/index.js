import { ProjectRenderer } from "./modules/project-renderer.js";

const projectsParentElement = document.querySelector(".js-projects");

function createProjectElement(project) {
  return `<div class="project">
            <img src="${project.image}" alt="Project Image" />
            <div class="text-project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            <a href="project.html?id=${project.uuid}">Learn More</a>
            </div>
          </div>`;
}

const projectRenderer = new ProjectRenderer();

projectRenderer.fetchProjects(projectsParentElement, createProjectElement);

/* LOADER */
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector("#loader");
  const menu = document.querySelector(".menu");

  function showLoader() {
    loader.classList.remove("hidden");
  }

  function hideLoader() {
    loader.classList.add("hidden");
    menu.style.visibility = "visible";
  }

  showLoader();

  setTimeout(hideLoader, 800);
});

/* SCROLL */
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
console.log(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
    console.log("scrolling");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* MENU */
const btnHamburger = document.querySelector("#btnHamburger");
const btnCross = document.querySelector("#btnCross");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", (e) => {
  e.target.style.opacity = "0";
  e.target.style.zIndex = "0";
  btnCross.style.opacity = "1";
  btnCross.style.zIndex = "1";
  menu.style.height = "210px";
});

btnCross.addEventListener("click", (e) => {
  e.target.style.opacity = "0";
  e.target.style.zIndex = "0";
  btnHamburger.style.opacity = "1";
  btnHamburger.style.zIndex = "1";
  menu.style.height = "0";
});


/* OWL CAROUSEL */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    animateIn: "linear",
    animateOut: "linear",
    smartSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
  });
});

