import { symbol } from 'prop-types'
import React, { useState, useEffect } from 'react'
import style from './Main.module.scss';
import { useSelector } from 'react-redux';
import MakeTagButton from '../../components/MakeTagButton';
import RecruitCard from '../../components/RecruitCard';
import SortRadioBtn from '../../components/SortRadioBtn/SortRadioBtn';
import StackTagSelection from '../../components/StackTagSelection/stackTagSelection';
import RecruitList from '../../components/RecruitList/recruitList';
import { useDispatch } from 'react-redux';
import { update } from '../../modules/recruitList';

function Main(props) {
  // let stack = useSelector((state)=>state.reducer);
  // let project = useSelector((state)=>state.reducer2);
  // let [radioValue, setRadioValue] = useState(['최신순', '조회순', '북마크'])
  // let [radioState, setRadioState] = useState('최신순');
  // let [tagSelect, setTagSelect] = useState([]);
  // let [trueList, setTrueList] = useState([])
  let [more, setMore] = useState(false);
  const dispatch = useDispatch;
  const stackList = useSelector((state) => state.stackList);
  // const handleClickRadio = (name) => {
  //   setRadioState(name);
  // }


  // useEffect(()=> {
  //   //리덕스 돌면서 name:, true: 값 채워주는 함수
  //   stack.map((tag)=>{
  //     let tempObj = {name: tag.name, select: true}
  //     setTagSelect(tagSelect => [...tagSelect, tempObj]);
  //     setTrueList(trueList => [...trueList, tag.name]);
  //   })
  //   return ()=> {
  //     setTagSelect([]);
  //     setTrueList([])
  //   }
  // }, [])

  // useEffect(() => {

  // }, [more]);

  return (
    <div>
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