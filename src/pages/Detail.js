import React, {useEffect} from 'react'
import { json, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import PestInformation from '../components/DetailPage/PestInformation';
import DealWithPest from '../components/DetailPage/DealWithPest';

import InsectImg from '../assets/images/InsectTestImg.png';
import WormLeftTopImg from '../assets/images/wormLeftTop.png';
import WormRightBottomImg from '../assets/images/wormRightBottom.png';

import { BiChevronLeft } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import postPestInfo from '../APIs/post/postPestInfo';

const Background = styled.div`
  background: linear-gradient(to bottom, #FF6A4A 27%, #FFFFFF 100%);
  /* height: 844px; */
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 31px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 260px;
  height: 274px;
  background: linear-gradient(to bottom, #ED6345 0%, #99402C 100%);
  margin-top: 49px;
  border-radius: 25px;
`;

const InsectImage = styled.img`
  width: 220px;
  height: 230px;
  margin: 22px 20px;
`;

const WormLeftTop = styled.img`
  position: absolute;
  left: -20px;
  top: -10px;
  z-index: 1;
`;

const WormRightBottom = styled.img`
  position: absolute;
  left: 190px;
  top: 208px;
  z-index: 1;
`;

const InsectName = styled.div`
margin-top: 61px;
margin-bottom: 34px;
color: #ffffff;
font-size: 32px;
font-weight: 900;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
width: 100%;
`;

function Detail() { // props로 pestName과 selectedCrop을 받아옴
  const navigate = useNavigate();
  
  // API 호출 함수
  const fetchPestInfo = async () => {
    const pestName = localStorage.getItem("pestName");
    const selectedCrop = JSON.parse(localStorage.getItem("inputData")).crop;
    try {
      const pestData = await postPestInfo(pestName, selectedCrop); // props로 받아온 값 사용
      console.log("해충 데이터:", pestData); 
    } catch(error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

// 컴포넌트가 마운트될 때 API 호출
useEffect(() => {
  fetchPestInfo();
}, []);

  return (
    <>
      <Background>
        <Header>
          <Button onClick={() => navigate('/home')}>
            <BiChevronLeft size='35px' color='#ffffff'/>
          </Button>
          <Button onClick={() => navigate('/main')}>
            <BsFillHouseDoorFill size='30px' color='#ffffff'/>
          </Button>
        </Header>
        <Body>
          
          <ImgContainer>
          <WormLeftTop src={WormLeftTopImg}/>
            <InsectImage src={InsectImg}/>
          <WormRightBottom src={WormRightBottomImg}/>
          </ImgContainer>
          
          <InsectName>톱다리개미허리노린재</InsectName>
          <Container>
            <PestInformation />
            <DealWithPest/>
          </Container>
          
        </Body>
      </Background>
    </>
  )
};

export default Detail;
