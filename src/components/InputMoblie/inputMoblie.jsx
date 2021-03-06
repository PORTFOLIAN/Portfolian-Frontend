import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { update } from '../../modules/recruitList';

function InputMoblie({ handleInputMoblie, keyword, handleInputKeyword }) {
  const dispatch = useDispatch();
  const handleOnClickSearch = () => {
    dispatch(update({ key: 'keyword', value: keyword }));
  };

  const handleOnKeypress = (e) => {
    if (e.key === 'Enter') {
      handleOnClickSearch();
    }
  };

  return (
    <InputMoblieContainer>
      {/* <CloseDiv>
        <Close height="12px" onClick={handleInputMoblie} style={{cursor:"pointer"}}></Close>
      </CloseDiv> */}
      <InputDiv>
        <Input
          type='text'
          placeholder='모집글 검색'
          onChange={(e) => handleInputKeyword(e)}
          onKeyPress={handleOnKeypress}
          value={keyword}></Input>
      </InputDiv>
      <Search onClick={handleOnClickSearch} style={{ cursor: 'pointer' }}>
        검색
      </Search>
    </InputMoblieContainer>
  );
}

export default InputMoblie;

const InputMoblieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.5px solid #eaeaea;
  border-bottom: 0.5px solid #eaeaea;
  height: 2.5rem;
  padding: 4px 0;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const CloseDiv = styled.div`
  border-right: 1px solid #eaeaea;
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  width: 80%;
  height: 90%;
  border: 0.5px solid #6f99cd76;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  width: 90%;
  overflow: auto;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #bbb6b6;
  }
  :-ms-input-placeholder {
    color: #bbb6b6;
  }
  /* margin-left: 8px; */
`;

const Search = styled.span`
  font-size: 14px;
  color: #6f9acd;
  padding: 0px 4px;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left: 1px solid #EAEAEA; */
`;
