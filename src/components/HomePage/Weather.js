import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsFillExclamationCircleFill, BsThermometerSun, BsFillDropletFill, BsCloudFog2Fill } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 330px;
  height: 195px;
  background-color: #3EB7EC;
  border-radius: 35px;
  padding: 10px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
  gap: 1vw;

  .headerIcon {
    margin: 0;
    color: #ffffff;
  }

  .headerText {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1vw;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  width: 98%;
  margin: 10px auto;
`;

const Body = styled.div`
.slick-prev{
width: 30px;
height: 30px;
color: #ffffff;
left: -6px;
}
.slick-next{
  width: 30px;
  height: 30px; 
  color: #ffffff;
  right: -6px;
}
.slick-dots li button:before{
  color: white
}
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  width: 92px;

  .weatherIcon {
    margin: 0;
    color: #ffffff;
    width: 42px;
    height: 40px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

const SlideContainer = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  box-sizing: border-box;
`;
// Next 화살표에 대한 스타일 컴포넌트
const NextArrow = styled(BiChevronRight)`

`;

// Prev 화살표에 대한 스타일 컴포넌트
const PrevArrow = styled(BiChevronLeft)`

`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}


function Weather() {
  const today = new Date(); // 오늘 날짜 정보 
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); // 오늘 날짜에서 1을 빼서 어제 날짜로 설정

  const todayYear = today.getFullYear();
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
  const todayDay = String(today.getDate()).padStart(2, '0');

  const yesterdayYear = yesterday.getFullYear();
  const yesterdayMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
  const yesterdayDay = String(yesterday.getDate()).padStart(2, '0');

  //기상청 API
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
  //cors걸리면 https://cors-anywhere.herokuapp.com/작성하기 + https://cors-anywhere.herokuapp.com/corsdemo접속해서 권한부여해야함.   
  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst', {
    params: {
      ServiceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 290, //290개가 하루치 양
      dataType: 'JSON',
      base_date: 	yesterdayYear + yesterdayMonth + yesterdayDay, // 어제 날짜 사용(어제날짜로 불러야 그 다음날 0000시부터 뜸)
      base_time: 2300,
      nx: 76,
      ny: 114,
    }
  });
      setData(response.data);
      
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data); // 데이터 출력
  }, [data]); // data가 변경될 때마다 실행
  
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;

    // 필요한 정보 추출
    const extractedData = data.response.body.items.item.reduce((acc, cur) => {
      if (cur.category === 'TMX') acc.TMX = cur.fcstValue; //최고기온
      if (cur.category === 'TMN') acc.TMN = cur.fcstValue; //최저기온
      if (cur.fcstTime === '0000') {
        if (cur.category === 'REH') acc.REH = cur.fcstValue; //습도 %
        if (cur.category === 'VEC') acc.VEC = cur.fcstValue; //풍향 deg(각도로 값을 주기 때문에 문자열로 바꿔줘야함)
        if (cur.category === 'WSD') acc.WSD = cur.fcstValue; //풍속 m/s
        if (cur.category === 'POP') acc.POP = cur.fcstValue; //강수확률 %
      }
      return acc;
    }, {});

    // 풍향을 방위로 변환하는 함수
  const getDirection = (degree) => {
    if (degree >= 0 && degree <= 45) {
      return '북';
    } else if (degree > 45 && degree <= 90) {
      return '북동';
    } else if (degree > 90 && degree <= 135) {
      return '동';
    } else if (degree > 135 && degree <= 180) {
      return '동남';
    } else if (degree > 180 && degree <= 225) {
      return '남';
    } else if (degree > 225 && degree <= 270) {
      return '남서';
    } else if (degree > 270 && degree <= 315) {
      return '서';
    } else {
      return '북서';
    }}

  // const url='https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?tm=202211300900&stn=0&help=1&authKey=y8EqW37PT8aBKlt-z-_GOQ?authKey=${API_KEY}'
  // const response = await fetch(url)
  // const data = await response.json() //내가 쓸 내용만 data에 저장하겠다.

  //캐러셀 구현
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Header>
        <BsFillExclamationCircleFill className='headerIcon' />
        <span className='headerText'>{todayYear}.{todayMonth}.{todayDay} 날씨</span>
      </Header>
      <Line />
      <Body>
        <Slider {...settings}>
          <SlideContainer>
            <WeatherBox>
              <Text>온도</Text>
              <BsThermometerSun className='weatherIcon' />
              <Text>{extractedData.TMX} / {extractedData.TMN}</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>습도</Text>
              <BsFillDropletFill className='weatherIcon' />
              <Text>{extractedData.REH}%</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>풍향</Text>
              <BsCloudFog2Fill className='weatherIcon' />
              <Text>{getDirection(parseFloat(extractedData.VEC))}풍</Text> {/* 풍향 방위로 변환 */}
            </WeatherBox>
          </SlideContainer>
          <SlideContainer>
            <WeatherBox>
              <Text>풍속</Text>
              <BsThermometerSun className='weatherIcon' />
              <Text>{extractedData.WSD}m/s</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>강수여부</Text>
              <BsFillDropletFill className='weatherIcon' />
              <Text>{extractedData.POP}%</Text>
            </WeatherBox>
          </SlideContainer>
        </Slider>
      </Body>
    </Container>
  );
}

export default Weather;
