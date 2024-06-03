import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

import InputLocation from '../components/MainPage/InputLocation';
import InputCrop from '../components/MainPage/InputCrop';
import InputDate from '../components/MainPage/InputDate';

import LogoImg from '../assets/images/LogoImg.png';

import { BsArrowRightCircleFill } from "react-icons/bs";
import postSelect from '../APIs/post/postSelect';


const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #2ADEA1 0%,
    #2ADEA1 50%,
    #BCFEE7 100%
  );
  height: ${props => 844 + props.extraHeight}px;  // 변경된 부분
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const LogoImage = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 63px;
`;

const Components = styled.div`
  padding-top: 20px;
`;

const ComponentsContainer = styled.div`
  padding-top: 19px;
`;

const Title1 = styled.div`
  font-weight: 600; /* Semi-bold 폰트 두께 */
  font-size: 20px;
  color: #ffffff; /* 글씨 색상을 흰색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  padding-top: 36px;
`;
const Title2 = styled.div`
  font-weight: 800; /* Semi-bold 폰트 두께 */
  font-size: 36px;
  color: #ffffff; /* 글씨 색상을 흰색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  padding-top: 8px;
`;

const ButtonDiv = styled.div`
  margin: 60px auto;
`;
const CheckButton = styled.button`
    width: 250px;
    height: 70px;
    border: none;
    border-radius: 50px;
    background-color: #ffffff;
    color: #14264C;
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;  // 버튼 내부 요소를 가로 방향에서 중앙으로 정렬
    align-items: center;      // 버튼 내부 요소를 세로 방향에서 중앙으로 정렬
    padding: 0 15px;          // 패딩 추가로 인해 내부 요소들이 좀 더 중앙에 위치하도록 함
`;
const IconTextContainer = styled.div`
    display: flex;
    align-items: center;  // 세로 방향에서 아이템을 중앙 정렬
`;

const Main = () => {
  const [extraHeight, setExtraHeight] = useState(0);

  // 변경: isOpen과 heightChange를 인수로 받아 처리
  const toggleHeight = (isOpen, heightChange) => {
    setExtraHeight(prev => prev + (isOpen ? heightChange : -heightChange));
  };

  const navigate = useNavigate();  // useNavigate 사용

  // api 연동 전 localStorage로 데이터 확인
  const [inputData,setInputData]=useState({
    location:'',
    crop:'',
    date:'',
  })

  const handleLocationButton = (value) => {
    setInputData(prevInputData => ({
      ...prevInputData,
      location: value
    }));
  };
  
  const handleCropButton = (value) => {
    setInputData(prevInputData => ({
      ...prevInputData,
      crop: value
    }));
  };

  const handleDateButton=(value)=>{
    setInputData(prevInputData=>({
      ...prevInputData,
      date:value
    }));
  };

  const handleConfirmClick = async () => {
    try {
      // const response = await postSelect(inputData.location, inputData.crop, inputData.date); // postSelect 함수 호출
      // console.log("선택된 값들을 API에 전달:", response);
      localStorage.setItem("inputData",JSON.stringify(inputData));
      console.log(inputData);
      navigate('/home');
      
    } catch (error) {
      alert('지역/작물/날짜가 선택되지 않았습니다.');
    }
  }
  // const [location,setLocation]=useState('');
  // const handleLocationButton = (value) => {
  //   setLocation(value);
  //   setInputData(prevInputData => ({
  //     ...prevInputData,
  //     location: value
  //   }));
  // };
  
  // const [crop,setCrop]=useState('');
  // const handleCropButton = (value) => {
  //   setCrop(value);
  //   setInputData(prevInputData => ({
  //     ...prevInputData,
  //     crop: value
  //   }));
  // };

  // const [date,setDate]=useState('');
  // const handleDateButton=(value)=>{
  //   setDate(value);
  //   setInputData(prevInputData=>({
  //     ...prevInputData,
  //     date:value
  //   }));
  // };
  // useEffect(()=>{
  //   const storedInputData=localStorage.getItem('inputData');
  //   if(storedInputData){
  //     setInputData(JSON.parse(storedInputData));
  //   }
  // },[]);
  // // 콘솔창에 빈 창이 계속 출력됨 _ 시작
  // // useEffect(() => {
  // //   console.log(location);
  // // }, [location]);
  // // useEffect(() => {
  // //   console.log(crop);
  // // }, [crop]);
  // // 콘솔창에 빈 창이 계속 출력됨 _ 끝
  // useEffect(()=>{
  //   localStorage.setItem('inputData',JSON.stringify(inputData));
  // },[inputData]);
  // // api 연동 코드 끝

  
  // // 초기 inputData 설정을 위한 useEffect
  // useEffect(() => {
  //   const storedInputData = localStorage.getItem('inputData');
  //   if (storedInputData) {
  //     setInputData(JSON.parse(storedInputData));
  //   } else {
  //     // 로컬 스토리지에 저장된 데이터가 없는 경우 초기 값으로 설정
  //     setInputData({
  //       location: '',
  //       crop: '',
  //       date: '',
  //     });
  //   }
  // }, []);

  // const handleConfirmClick = async () => {
  //   try{
  //     const response = await postSelect()
  //   } catch {
  //     alert('지역/작물/날씨가 선택이 안됐습니다.');
  //   }

  // }

  
  return (
    <>
      <Background extraHeight={extraHeight}>
        <LogoImage src={LogoImg} />
        <Title1>한 손에 담긴 해충 알림 센터</Title1>
        <Title2>G Q</Title2>
        <Components>
          <ComponentsContainer>
            <InputLocation 
              onToggle={isOpen => toggleHeight(isOpen, 243)} 
              onClick={handleLocationButton}
              value={inputData.location}
            />
          </ComponentsContainer>
          <ComponentsContainer>
          <InputCrop 
              onToggle={isOpen => toggleHeight(isOpen, 243)} 
              onClick={handleCropButton}
              value={inputData.crop}
            /> 
          </ComponentsContainer> 
          <ComponentsContainer>
          <InputDate 
              onToggle={isOpen => toggleHeight(isOpen, 348)} 
              value={inputData.date}
              onChange={handleDateButton}
            />
          </ComponentsContainer>   
        </Components>
        <ButtonDiv>
          <CheckButton  onClick={handleConfirmClick}>
            <IconTextContainer>
              <BsArrowRightCircleFill size="28px" style={{ marginRight: '10px'}}/>
              확인하기
            </IconTextContainer>
          </CheckButton>
        </ButtonDiv>
        <Outlet /> 
      </Background>
    </>
  );
};

export default Main;