import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import MainToggle from '../components/MainPage/MainToggle';
import { Locations } from '../assets/constants/Locations';
import { Crops } from '../assets/constants/Crops';
import InputDate from '../components/MainPage/InputDate';

import LogoImg from '../assets/images/LogoImg.png';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #2ADEA1 0%,
    #2ADEA1 50%,
    #BCFEE7 100%
  );
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
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding-top: 36px;
`;

const Title2 = styled.div`
  font-weight: 800;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
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
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Main = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    location: '',
    crop: '',
    date: '',
  });

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

  const handleDateButton = (value) => {
    setInputData(prevInputData => ({
      ...prevInputData,
      date: value
    }));
  };

  const handleConfirmClick = async () => {
    try {
      localStorage.setItem("inputData", JSON.stringify(inputData));
      console.log(inputData);
      navigate('/home');
    } catch (error) {
      alert('지역/작물/날짜가 선택되지 않았습니다.');
    }
  };

  const handleToggle = (isOpen) => {
    // 아무 작업 없이 그대로 전달
  };

  return (
    <Background>
      <LogoImage src={LogoImg} />
      <Title1>한 손에 담긴 해충 알림 센터</Title1>
      <Title2>G Q</Title2>
      <Components>
        <ComponentsContainer>
          <MainToggle 
            value={inputData.location}
            onClick={handleLocationButton}
            onToggle={handleToggle}
            header={Locations.header}
            elements={Locations.elements}
          />
        </ComponentsContainer>
        <ComponentsContainer>
          <MainToggle 
            value={inputData.crop}
            onClick={handleCropButton}
            onToggle={handleToggle}
            header={Crops.header}
            elements={Crops.elements}
          />
        </ComponentsContainer>
        <ComponentsContainer>
          <InputDate
            value={inputData.date}
            onChange={handleDateButton}
            onToggle={handleToggle} // onToggle 함수 추가
          />
        </ComponentsContainer>
      </Components>
      <ButtonDiv>
        <CheckButton onClick={handleConfirmClick}>
          <IconTextContainer>
            <BsArrowRightCircleFill size="28px" style={{ marginRight: '10px' }} />
            확인하기
          </IconTextContainer>
        </CheckButton>
      </ButtonDiv>
    </Background>
  );
};

export default Main;
