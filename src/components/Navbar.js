import React, { useState } from 'react'
import style from './style/Navbar.module.scss'

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.navBody}>
        <div className={style.logo}>
          <img  alt="LOGO" src="img/logo520.svg" />
        </div>
        <div className={style.contents}>
          <div>검색창</div>
          <div>프로필</div>
          <div>메신저</div>
          <div>알람자리임요~</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar