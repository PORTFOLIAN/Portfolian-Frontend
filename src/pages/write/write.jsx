import React, { useState } from 'react'
import RecruitTemplate from '../../components/RecruitTemplate/recruitTemplate'
import style from './Write.module.scss'

function Write() {
  const [inputs, setInputs] = useState({
    title: '',
    stackList: [],
    subjectDiscription: '',
    projectTime: '',
    recruitCondition: '',
    progress: '',
    capacity: '',
    detail: ''
  });

  return (
    <div className={style.writeContainer}>
      <RecruitTemplate inputs={inputs} setInputs={setInputs}></RecruitTemplate>
      <div className={style.btnContainer}>
        <button className={style.temp}>임시저장</button>
        <button className={style.save}>등록하기</button>
        {/* {console.log(project)} */}
      </div>
    </div>
  )
}

export default Write
