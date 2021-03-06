import httpClient from './http_client';

class Project {
  constructor() {
    this.project = httpClient;
  }

  getList = async (userId, recruitList) => {
    try {
      console.log('getList userId=', userId);
      let stackReq = '';
      recruitList.stack.map((stack, i) => {
        stackReq = stackReq.concat('&stack=' + stack);
      });
      const recruit_list =
        recruitList.sort === 'bookMark'
          ? userId !== 0
            ? await this.project.get(`/users/${userId}/bookMark`)
            : await this.project.get(
                `projects?keyword=${recruitList.keyword}${stackReq}&sort=${recruitList.sort}`,
              )
          : await this.project.get(
              `projects?keyword=${recruitList.keyword}${stackReq}&sort=${recruitList.sort}`,
            );
      console.log('sort=', recruitList.sort, '\n recruit_list=', recruit_list);
      return recruit_list;
    } catch (error) {
      console.error(error);
    }
  };

  post = async ({ article, ownerStack }) => {
    try {
      const response = await this.project.post('projects', {
        article: article,
        ownerStack: ownerStack,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getDetail = async (projectId) => {
    try {
      const response = await this.project.get(`projects/${projectId}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  modify = async ({ projectId, article, ownerStack }) => {
    try {
      const response = await this.project.put(`projects/${projectId}`, {
        article: article,
        ownerStack: ownerStack,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

const projectService = new Project(httpClient);
export default projectService;
