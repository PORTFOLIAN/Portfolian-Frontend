import React, { useState } from 'react'
import GoogleButton from './GoogleButton'
import style from '../style/Navbar.module.scss'

function Navbar() {
  let [login, setLigin] = useState(false);
  let [openModal, setOpenModal] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.navBody}>
        <div className={style.logo}>
          <img  alt="LOGO" src="img/logo520.svg" />
        </div>
        <div className={style.contents}>
          {
          !login
          ? <button onClick={setOpenMadal(true)}>로그인</button>
          : <><div>검색창</div>
            <div>프로필</div>
            <div>메신저</div>
            <div>알람자리임요~</div></>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar