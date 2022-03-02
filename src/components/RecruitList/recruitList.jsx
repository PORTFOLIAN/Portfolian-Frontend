import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RecruitCard from '../RecruitCard/recruitCard';

function RecruitList() {
  const dispatch = useDispatch();
  const recruit_list = useSelector((state) => state.recruitList);

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
