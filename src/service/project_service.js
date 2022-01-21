import httpClient from "./http_client";

class Project {
  constructor() {
    this.project = httpClient;
  }

  post = async({article, ownerStack}) => {
    try {
      const response = await this.project.post('projects', {
        article: article,
        ownerStack: ownerStack,
      });
      return response;
    } catch(error) {
      console.error(error);
    }
  }
}

const projectService = new Project(httpClient);
export default projectService;
