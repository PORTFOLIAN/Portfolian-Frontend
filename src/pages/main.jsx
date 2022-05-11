import React, { useState } from 'react';
import styled from 'styled-components';
import SortRadioBtn from '../components/SortRadioBtn/sortRadioBtn';
import StackTagSelection from '../components/StackTagSelection/stackTagSelection';
import RecruitList from '../components/RecruitList/recruitList';
import Navbar from '../components/Navbar/navbar';
import Banner from '../components/Banner/banner';
import Footer from '../components/Footer/footer';

function Main(props) {
  let [more, setMore] = useState(false);

  return (
    <>
      <MainContainer>
        <Navbar />
        <Banner />
        <ContentsSection>
          <OrderSection>
            <ShowFilter onClick={() => setMore(!more)}>
              사용 기술 선택하기 ▼
            </ShowFilter>
            <SortRadioBtn></SortRadioBtn>
          </OrderSection>
          {more ? <StackTagSelection /> : null}
          <RecruitSection>
            <RecruitList></RecruitList>
          </RecruitSection>
        </ContentsSection>
        <Footer></Footer>
      </MainContainer>
    </>
  );
}

export default Main;

const MainContainer = styled.div`
  min-height: calc(100vh - 160px);
  position: relative;
  padding-bottom: 2rem;
`;

const ContentsSection = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 62rem;
`;

const OrderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  max-width: 896px;
  flex-wrap: wrap-reverse;
`;

const ShowFilter = styled.div`
  cursor: pointer;
  @media screen and (max-width: 966px) {
    margin-top: 16px;
    margin-left: 20px;
  }
`;

const RecruitSection = styled.div`
  margin-top: 18px;
  @media screen and (max-width: 966px) {
    justify-content: center;
  }
`;
