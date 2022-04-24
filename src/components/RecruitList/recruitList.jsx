import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { update } from '../../modules/recruitList';
import RecruitCard from '../RecruitCard/recruitCard';
import project from '../../service/project_service';

function RecruitList() {
  const dispatch = useDispatch();
  const recruit_list = useSelector((state) => state.recruitList);

  useEffect(() => {
    project.getList(recruit_list).then((response) => {
      dispatch(update({ key: 'recruit', value: response.data.articleList }));
    });
    // return () => {
    //   dispatch(update({key: "keyword", value: "default"}));
    // };
  }, []);

  return (
    <>
      {recruit_list.recruit &&
        recruit_list.recruit.map((elem, i) => {
          return (
            // 카드컴포넌트
            <RecruitCard recruitElem={elem} key={elem.projectId}></RecruitCard>
          );
        })}
    </>
  );
}

export default RecruitList;
