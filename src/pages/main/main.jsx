import { symbol } from 'prop-types'
import React, { useState, useEffect } from 'react'
import style from './Main.module.scss';
import { useSelector } from 'react-redux';
// import MakeTagButton from '../../components/MakeTagButton';
// import RecruitCard from '../../components/RecruitCard';
import SortRadioBtn from '../../components/SortRadioBtn/SortRadioBtn';
import StackTagSelection from '../../components/StackTagSelection/stackTagSelection';
import RecruitList from '../../components/RecruitList/recruitList';
import { useDispatch } from 'react-redux';
import { update } from '../../modules/recruitList';
import Navbar from '../../components/Navbar/navbar';

function Main(props) {
  let [more, setMore] = useState(false);
  const dispatch = useDispatch;
  const stackList = useSelector((state) => state.stackList);



  return (
    <div>
      <Navbar />
      <div className={style.banner}>
      </div>
      <div className={style.container}>
        <div className={style.order}>
          <div className={style.showFilter} onClick={()=>setMore(!more)}>
            사용 기술 선택하기 ▼
          </div>
          <SortRadioBtn></SortRadioBtn>
        </div>
        {
          more
          ? <StackTagSelection/>
          : (null)
        }
        <div className={style.recruitList}>
          <RecruitList></RecruitList>
          {/* {
            project.map((a)=>{
              return (
                <RecruitCard a={a}/>
              )
            })
          } */}
        </div>
      </div>
    </div>
  )
}

export default Main;
