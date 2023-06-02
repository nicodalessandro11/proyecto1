import { ProjectRenderer } from "./modules/project-renderer.js";

function createMainProjectElement(project) {
  return `<div class="main-project">
            <div class="title">
                <h1>${project.name}</h1>
            </div>
            <div class="title-footer">
                <h2>UI Design & App Development</h2>
                <h3>${project.completed_on}</h3>
            </div>
            <div class="image-project">
                <img
                src="${project.image}"
                alt="Project Image"
                />
            </div>

            <div class="text-project">
                <p>
                ${project.content}
                </p>
            </div>
            </div>`;
}

function createOtherProjectsElement(project) {
  return `<div class="project">
            <img src="${project.image}" alt="Project Image" />
            <div class="text-project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            <a href="project.html?id=${project.uuid}">Learn More</a>
            </div>
        </div>`;
}

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const projectRenderer = new ProjectRenderer();
const mainProjectParentElement = document.querySelector(
  ".container-main-project"
);
const otherProjectsParentElement = document.querySelector(".js-projects");
const projectId = getParameterByName("id");

projectRenderer.fetchProjects(
  mainProjectParentElement,
  createMainProjectElement,
  projectId,
  false
);

projectRenderer.fetchProjects(
  otherProjectsParentElement,
  createOtherProjectsElement,
  projectId,
  true
);

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

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
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