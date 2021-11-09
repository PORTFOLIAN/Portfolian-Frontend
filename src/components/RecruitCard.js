import React from 'react';
import { connect } from 'react-redux';
import MakeTagDiv from './MakeTagDiv';
import style from '../style/RecruitCard.module.scss'

function RecruitCard(props) {


  return (
    <div className={style.cardContents}>

      <div className={style.bookmarkIcon} onClick={() => {
        props.dispatch( {type: 'bookMark', data: {id: props.a.projectIdx}} )
      }}>
        {props.a.bookMark === false
        ? <img alt="bookmark" src="img/bookmark_false.svg"></img>
        : <img alt="bookmark" src="img/bookmark_true.svg"></img>}
      </div>

      <div className={style.contentsArea}>
          <div className={style.details}>
            <div className={style.title}>{ props.a.title }</div>
            <div className={style.tagArea}>
              {
                props.a.stackList.map((stack)=>{
                  return (<MakeTagDiv stack={stack}/>)
                })
              }
            </div>
            <div className={style.description}>
              {props.a.description}
            </div>
          </div>

          <div className={style.unitInfo}>
            <div className={style.capacity}>
              <span>모집인원</span>
              <span>
                { props.a.capacity }
                <img alt="people" src="img/people_icon.svg"></img>
              </span>
            </div>
            <div className={style.views}>
              <span>조회수</span>
              <span>{ props.a.view }</span>
            </div>
            <button className={props.a.status===0?style.on:style.off}>지원하기</button>
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

export default connect(stateToProps)(RecruitCard);