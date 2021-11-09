import { symbol } from 'prop-types'
import React, { useState, useEffect } from 'react'
import style from '../style/Main.module.scss';
import { useSelector } from 'react-redux';
import MakeTagButton from '../components/MakeTagButton';
import RecruitCard from '../components/RecruitCard';

function Main(props) {
  let stack = useSelector((state)=>state.reducer);
  let project = useSelector((state)=>state.reducer2);
  let [radioValue, setRadioValue] = useState(['최신순', '조회순', '북마크'])
  let [radioState, setRadioState] = useState('최신순');
  let [tagSelect, setTagSelect] = useState([]);
  let [trueList, setTrueList] = useState([])
  let [more, setMore] = useState(false);
  const handleClickRadio = (name) => {
    setRadioState(name);
  }

  useEffect(()=> {
    //리덕스 돌면서 name:, true: 값 채워주는 함수
    stack.map((tag)=>{
      let tempObj = {name: tag.name, select: true}
      setTagSelect(tagSelect => [...tagSelect, tempObj]);
      setTrueList(trueList => [...trueList, tag.name]);
    })
    return ()=> {
      setTagSelect([]);
      setTrueList([])
    }
  }, [])

  useEffect(() => {

  }, [more]);

  return (
    <div>
      <div className={style.banner}>
      </div>
      <div className={style.container}>
        <div className={style.order}>
          <div className={style.showFilter} onClick={()=>setMore(!more)}>
            사용 기술 선택하기 ▼
          </div>
          <div className={style.radioSelector}>
            {
              radioValue.map(function(name){
              return (
                <div className={style.radioElem} onClick={()=>handleClickRadio(name)}>
                  {
                  radioState === name
                  ?<img alt="LOGO" src="img/circle.svg"></img>
                  :<img alt="LOGO" src="img/circle_empty.svg"></img>
                  }
                  <div>{ name }</div>
                </div>
                )
              })
            }
          </div>
        </div>
        {
          more
          ? <MakeTagButton tagSelect={tagSelect} setTagSelect={setTagSelect} trueList={trueList} setTrueList={setTrueList}/>
          : (null)
        }
        <div className={style.recruitList}>
          {
            project.map((a)=>{
              return (
                <RecruitCard a={a}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Main;
