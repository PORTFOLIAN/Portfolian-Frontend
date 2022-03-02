import React from 'react';
import styled from 'styled-components';

function Banner() {
  return (
    <BannerContainer>
      <Line>
        <BannerText>
          다양한 개발자들과 협업할 수 있는
          <br />
          최고의 플랫폼
        </BannerText>
        <ImgContainer>
          <ImgItems
            src={'img/banner/ab.svg'}
            alt="첫째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/aa.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ab.svg')}
          />
          <ImgItems
            src={'img/banner/ba.svg'}
            alt="둘째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/bb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ba.svg')}
          />
          <ImgItems
            src={'img/banner/ca.svg'}
            alt="셋째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/cb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ca.svg')}
          />
          <ImgItems
            src={'img/banner/da.svg'}
            alt="넷째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/db.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/da.svg')}
          />
        </ImgContainer>
      </Line>
      <Line>
        <ImgContainer>
          <ImgItems
            src={'img/banner/ea.svg'}
            alt="다섯째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/eb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ea.svg')}
          />
          <ImgItems
            src={'img/banner/fa.svg'}
            alt="여섯째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/fb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/fa.svg')}
          />
          <ImgItems
            src={'img/banner/ga.svg'}
            alt="일곱째"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/gb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ga.svg')}
          />
          <ImgItems
            src={'img/banner/ha.svg'}
            alt="막내"
            onMouseOver={(e) => (e.currentTarget.src = 'img/banner/hb.svg')}
            onMouseOut={(e) => (e.currentTarget.src = 'img/banner/ha.svg')}
          />
        </ImgContainer>
        {/* <Logoimg src='img/logo192.svg' alt='로고'></Logoimg> */}
        <LogoText>포트폴리안</LogoText>
      </Line>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  font-size: 3rem;
  margin-top: 0.3rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ffe7fd; */
`;
const Text = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BannerText = styled(Text)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoText = styled(Text)`
  margin-left: 2rem;
  font-size: 2.7rem;
`;

const Line = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  height: 6rem;
  @media screen and (max-width: 414px) {
    height: 40%;
  }
`;

const ImgItems = styled.img`
  margin: 0 0.5rem;
`;

const Logoimg = styled.img`
  margin-left: 1rem;
`;
