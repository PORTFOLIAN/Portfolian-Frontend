import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function DropDown({handleLogout}) {

  return (
    <DropDownContainer>
      <ListContainer>
        <ListTop>
          <Linkitems to="/" style={{ display: "inline-block", textDecoration: 'none'}}>마이페이지</Linkitems>
        </ListTop>
        <ListItems>
          <AItem href="/write" style={{ display: "inline-block", textDecoration: 'none' }}>모집공고 생성</AItem>
        </ListItems>
        <ListItems onClick={handleLogout}>
          로그아웃
        </ListItems>
      </ListContainer>
    </DropDownContainer>
  )
}

export default DropDown

const DropDownContainer = styled.div`
  background-color: #FFF;
  position: absolute;
  top: 4rem;
  box-shadow: 1px 1px 8px 0px rgba(177, 177, 177, 0.918);
  @media screen and (max-width: 768px){
    right: 0px;
  }
`

const ListContainer = styled.ul`
  list-style: none;
  padding: 0px 1.5rem;
  font-size: 14px;
  font-weight: 500;
`

const ListItems = styled.li`
  margin: 1rem 0;
  &:hover {
    color: #6F9ACD;
  }
  @media screen and (max-width: 768px){
    /* margin: 1rem 0; */
  }
`

const ListTop = styled(ListItems)`
  margin-top: 0px;
`

const Linkitems = styled(Link)`
  &:hover {
    color: #6F9ACD;
  }
`

const AItem = styled.a`
  &:hover {
    color: #6F9ACD;
  }
`