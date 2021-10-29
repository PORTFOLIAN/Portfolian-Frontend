import { symbol } from 'prop-types'
import React, { useState } from 'react'
import style from './style/Main.module.scss';
import { connect } from 'react-redux';
import MakeTagButton from './MakeTagButton';
import RecruitCard from './RecruitCard';

function Main(props) {
  let [radioValue, setRadioValue] = useState(['최신순', '조회순', '북마크'])
  let [radioState, setRadioState] = useState('최신순');
  let [filterSwitch, setFilterSwitch] = useState();
  let [more, setMore] = useState(false);
  const handleClickRadio = (name) => {
    setRadioState(name);
  }


  return (
    <div>
      <div className={style.banner}>
      </div>
      <div className={style.container}>
        <div className={style.tagSelect}>
          {props.stackObj.map((name, i)=>{
            return (
              <>
                <MakeTagButton name = {name} />
              </>
            )
            })}
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
        
        <div className={style.recruitList}>
          {
            props.project.map((a)=>{
              return (
                <RecruitCard a = {a}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function stateToProps(state){
  return{
    stackObj: state.reducer,
    project: state.reducer2,
  }
}

export default connect(stateToProps)(Main);
