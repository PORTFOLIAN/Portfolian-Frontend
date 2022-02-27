import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterText>Copyright 2022. 포트폴리안. all rights reserved</FooterText>
        <FooterText>홍민주 한지원 손상준 이상현 이순범 | 문의 mhong0800@gmail.com</FooterText>
      </FooterContents>
    </FooterContainer>
  )
}

export default Footer


const FooterContainer = styled.footer`
  /* box-sizing: border-box; */
  position: absolute;
  bottom: -140px;
  height: 140px;
  background-color: #eeeeee53;
  width: 100%;
  /* margin-top: 5rem; */
`
const FooterContents = styled.div`
  margin: 0 auto;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FooterText = styled.p`
  color: #909090;
  font-size: 12px;
`
