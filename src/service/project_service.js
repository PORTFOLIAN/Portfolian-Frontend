import httpClient from "./http_client";

class Project {
  constructor() {
    this.project = httpClient;
  }

  getList = async (recruitList) => {
    try {
      let stackReq="";
      recruitList.stack.map((stack, i) => {
        stackReq = stackReq.concat("&stack="+stack);
      })
      const recruit_list = await this.project.get(`projects?keyword=${recruitList.keyword}${stackReq}&sort=${recruitList.sort}`);
      return recruit_list;
    } catch(error) {
      console.error(error);
    }
  };

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

  getDetail = async(projectId) => {
    try {
      const response = await this.project.get(`projects/${projectId}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  modify = async({projectId, article, ownerStack}) => {
    try {
      const response = await this.project.put(`projects/${projectId}`, {
        article: article,
        ownerStack: ownerStack,
      });
      console.log("modify response: ", response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

const projectService = new Project(httpClient);
export default projectService;
