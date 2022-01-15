import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import recruit from '../../service/recruit_service';
import RecruitCard from '../RecruitCard/recruitCard'


function RecruitList() {
  const dispatch = useDispatch();
  const recruit_list = useSelector((state) => state.recruitList)

  // useEffect(() => {
  //   recruit.getList(recruit_list)
  // }, []);

  return (
    <>
      {
        recruit_list.recruit && recruit_list.recruit.map((elem, i) => {
          return (
            // 카드컴포넌트
            <RecruitCard key={i} recruitElem={elem}></RecruitCard>
          )
        })
      }
    </>
  )
}

export default RecruitList
