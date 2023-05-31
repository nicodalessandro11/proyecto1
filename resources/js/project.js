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
