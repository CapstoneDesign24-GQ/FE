import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import Header from '../components/HomePage/Header';
import State from '../components/HomePage/State'
import Weather from '../components/HomePage/Weather';

import WormRightTopImg from '../assets/images/wormRightTop.png';
import CloudImg from '../assets/images/cloud.png'
import Weather1 from '../components/HomePage/Weather copy';
import getStateInfo from '../APIs/get/getStateInfo';

const Background = styled.div`
  display: flex;
  flex-direction: column; //div 속성
  align-items: center;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
border: none;
border-radius: 5px;
background-color: #3EB7EC;
color: #ffffff;
font-size: 24px;
font-weight: 500;
margin-top: 10px;
`;

const Container = styled.div`
position: relative;
margin: 32px 30px;
`
const Line=styled.div`
  width:360px;
  height:3px;

  border-radius:15px;

  background-color:#665E5E;
`;

const WormRightTop = styled.img`

  position: absolute; //애벌레 위치 움직이지 않으려면 부모에 relative, 자식 속성에 absolute주고 위치 조정해야함.
  left: 254px;
  top: -32px;
  z-index: 1;
`;

const CloudImage = styled.img`
position: absolute;
left: 250px;
top: -22px;
z-index: 1;
`;

function Home() {
  const navigate=useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('콩');

  const [infoResult, setInfoResult] = useState({
      "selected_crop": selectedCrop,
      "selected_location": "충청도",
      "selected_date": "2024-06-04",
      "percentages": {
          "담배거세미나방": 50
      },
      "riskLevels": {
          "담배거세미나방": "주의"
      }
  });
  const [stateData, setStateData] = useState({
    "percent":"50",
    "pestName":"톱다리개미허리노린재"
  });
  const [nowData, setNowData] = useState(0);
  
  const bugs = [
    "담배거세미나방",
    "미국선녀벌레",
    "썩덩나무노린재",
    "작은뿌리파리",
    "톱다리개미허리노린재",
    "흰점도둑나방"
  ]

  useEffect( () => {
    const fetchStateInfo = async () => {
      try{
        const result = await getStateInfo();
        setInfoResult(result);
        console.log("state 데이터:", result);

        setStateData({
          "percent":infoResult.percentages[bugs[nowData]],
          "pestName":bugs[nowData]
        })
      } catch (error) {
        console.log("앨범 정보를 가져오는 데 실패했습니다:", error);
      }
    };
    fetchStateInfo();
  }, [])

  useEffect(()=>{
    setStateData({
      "percent":infoResult.percentages[bugs[nowData]],
      "pestName":bugs[nowData]
    })
  }, [nowData])

  return (
    <Background>
      <Header selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop}/>
      <Container>
        <WormRightTop src={WormRightTopImg}/>  
        <State selectedCrop={stateData} nowData={nowData} setNowData={setNowData}/> 
      </Container>
      <Line/>
      <Container>
        <CloudImage src={CloudImg}/>
        <Weather/>
      </Container>      
    </Background>
  )
}

export default Home
