import httpClient from "./http_client";
/*
모집공고 등록, 삭제, 수정, 조회 등 study 글 관련 api를 모아놓은 class
*/

class Recruit {
  constructor(){
    this.recruit = httpClient;
  }

  getList = async (recruitList) => {
    try {
      // let stack = stackList;
      // let keywords = keyword;
      // if (!stackList) {
      //   stack = "default";
      // }
      // console.log(stackList);
      const recruit_list = await this.recruit.get(`projects?keyword=${recruitList.keyword}&stack=${recruitList.stack}&sort=${recruitList.sort}`);
      console.log(recruit_list);
      return recruit_list;
    } catch(error) {
      console.error(error);
    }
  };

}

const recruit = new Recruit(httpClient);
export default recruit;