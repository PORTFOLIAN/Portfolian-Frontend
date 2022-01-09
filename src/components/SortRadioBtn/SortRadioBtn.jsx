import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { update } from '../../modules/recruitList';
import recruit from '../../service/recruit_service';

const RadioSelector = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 22px;
`;

const RadioElem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioImg = styled.img`
  width: 12px;
  margin: 0 5px 0 20px;
`;


function SortRadioBtn() {
  const dispatch = useDispatch();
  const recruitList = useSelector((state) => state.recruitList);
  const radioValue = ['최신순', '조회순', '북마크'];
  const [radioState, setRadioState] = useState('최신순');
  const handleClickRadio = (name) => {
  let val = "";
    setRadioState(name);
    if (radioState === "최신순") val = "defualt";
    else if (radioState === "조회순") val = "view";
    else val = "bookMark";
    dispatch(update({key: "sort", value: val}));
  }

  useEffect(() => {
    recruit.getList(recruitList).then((response) => {
      // console.log("radio response:",response.data);
      dispatch(update({key: "recruit", value: response.data.articleList}))
    })
  }, [radioState]);

  return (
    <RadioSelector>
          {
            radioValue.map(function(name){
            return (
              <RadioElem onClick={()=>handleClickRadio(name)}>
                {
                radioState === name
                ?<RadioImg alt="LOGO" src="img/circle.svg"></RadioImg>
                :<RadioImg alt="LOGO" src="img/circle_empty.svg"></RadioImg>
                }
                <div>{ name }</div>
              </RadioElem>
              )
            })
          }
        </RadioSelector>
  )
}

export default SortRadioBtn
