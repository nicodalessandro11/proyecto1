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
