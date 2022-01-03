import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { update } from '../../modules/recruitList';
import {ReactComponent as SearchIcon} from '../asset/search.svg' 


function SearchBar({ handleInputMoblie, keyword, handleInputKeyword }) {
  const dispatch = useDispatch();
  
  const handleOnClickSearch = () => {
    dispatch(update({key: "keyword", value: keyword}));
    
  }

  const handleOnKeypress = (e) => {
    if(e.key === 'Enter') {
      handleOnClickSearch();
    }
  }

  return (
    <>
      <InputContainer>
        <Input type="text" placeholder="모집글 검색하기" onChange={(e)=>handleInputKeyword(e)} onKeypress={handleOnKeypress} value={keyword}></Input>
        <SearchIcon onClick={handleOnClickSearch} style={{cursor:"pointer"}}/>
      </InputContainer>
      {/* <InputContainerMoblie>
        <SearchIcon style={{cursor:"pointer"}} onClick={handleInputMoblie}/>
      </InputContainerMoblie> */}
    </>
    )
}
export default SearchBar

const InputContainer = styled.div`
  height: 2rem;
  width: 14rem;
  padding-left: 8px;
  padding-right: 2px;
  border: 1px solid #6f99cd73;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 24px;
  &:focus {
    border: 1px solid #6F9ACD;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Input = styled.input`
  border: none;
  width: 10rem;
  color: #696969;
  font-size: 12px;
  margin-right: 8px;
  -webkit-appearance: none;
  overflow: auto;
  ::placeholder ::-webkit-input-placeholder{
    color: #d8d7d7;
  }
`
const InputContainerMoblie = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`