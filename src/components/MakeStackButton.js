// import React, {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

// let Button = styled.button`
//   font-size: 14px;
//   color: ${(props)=> (props.select ? (props.name === 'ect' ? '#EAEAEA' : '#343A40') : '#909090')};
//   background-color: ${ props => props.select ? props.color : '#EAEAEA'};
//   padding: 2px 16px; 
//   margin: 1rem 4px 0 4px;
//   border-radius: 16px;
//   border: 0;
//   cursor: pointer;
//   white-space:nowrap;
// `;

// let Container = styled.div`
//   margin: 16px auto;
//   max-width: 100%;
//   width: 100%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-start;
// `;


// function MakeStackButton({stackArr, setStackArr, btnSelect, setbtnSelect}) {
//   let stack = useSelector((state)=>state.reducer);
//   let elemSelectState;
//   let updatebtnSelect = (name) => {
//     let copyArr;
//     let copyObj = btnSelect.map((elem) => {
//       if (elem.name === name) {
//         if (stackArr.length === 7 && elem.select === false){
//           return elem;
//         }
//         elem.select = !elem.select;
//       }
//       return elem;
//     })
//     setbtnSelect(copyObj);
//     copyArr = btnSelect.filter(elem => elem.select === true).map(elem => elem.name);
//     setStackArr(copyArr);
    
//   }

//   let findBtn = (tagName) => {
//     let btn = btnSelect.find((elem) => tagName === elem.name);
//     return btn;
//   }

//   return (
//     <Container>
//       {
//         stack.map(function(tag, i){
//           // console.log(btnSelect[i]);
//           // 나중에 해결해.. (select에 따라서 색변화, 클릭한 버튼만 리랜더)
//           // 버튼 하나하나 컴포넌트화 시키는 방법으로 고고해보삼
//           //write 컴포넌트의 useEffect 훅이랑 여기서 나는 오류랑 뭔가 상관있을듯
//           if (findBtn(tag.name) != undefined)
//             {return (<Button color={tag.color} name={tag.name} select={findBtn(tag.name).select} onClick={
//               (e)=>{updatebtnSelect(e.target.name);
//               }}>
//                 {tag.name}
//               </Button>)}
//         })
//       }
//     </Container>
//   )
// }

// export default MakeStackButton
