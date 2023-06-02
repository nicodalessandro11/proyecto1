export class ProjectRenderer {
  async fetchProjects(
    projectsParentElement,
    createProjectElement,
    filterId,
    exclude
  ) {
    try {
      const projects = await this.getProjectsFromAPI();
      const filteredProjects = this.filterProjects(projects, filterId, exclude);
      this.renderProjects(
        filteredProjects,
        createProjectElement,
        projectsParentElement
      );
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  }

  async getProjectsFromAPI() {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const apiData = await response.json();
    const projects = apiData.slice(1, 4).reverse();
    return projects;
  }

  filterProjects(projects, filterId, exclude) {
    return filterId
      ? exclude
        ? projects.filter((project) => project.uuid !== filterId)
        : projects.filter((project) => project.uuid === filterId)
      : projects;
  }

  renderProjects(projects, createProjectElement, projectsParentElement) {
    const projectElements = projects.map(createProjectElement);
    projectsParentElement.innerHTML = projectElements.join("");
  }
}
