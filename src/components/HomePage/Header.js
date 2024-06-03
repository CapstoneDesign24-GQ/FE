import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { BiChevronLeft } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { BsGeoFill } from 'react-icons/bs';
import { BsQuestionCircleFill } from "react-icons/bs";

const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 42px 32px ;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Location = styled.div`
color: #14264C;
font-size: 28px;
font-weight: 600;
margin-right: 10px;
margin-top: 5px;
`;
const Crop = styled.div`
color: #ffffff;
background-color: #14264C;
width: 60px;
height: 40px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;

font-size: 20px;
font-weight: 600;
`

//모달
const ModalBackground = styled.div`
  position: fixed;
  top: 83px;
  /* left: 380px; */
  width: 390px;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); //반투명 배경 */
  backdrop-filter: blur(2px);
  display: flex;
  /* align-items: center; //세로 정렬이라 필요없음 */
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  height: 410px;
  background-color: ${({ theme }) => theme.colors.darkblue};
  border-radius: 15px;
  box-shadow: 0px 3px 5px #0000002f;
  z-index: 1001;
`;

//Location 토글
const IsToggledHeader=styled.div`
  display:flex;
  flex-direction:row;

  margin-top:26px;
  margin-left:0px;

  text-align:left;
  // align-items:center;

  font-size:${({theme})=>theme.fontSizes.inputBold};
  font-weight:${({theme})=>theme.fontsWeights.inputBold};

  span{
    margin:auto 190px 17px 11px;
    color: #ffffff;
  }
`;

const IsToggledLine=styled.div`
  width:321px;
  height:3px;

  border-radius:15%;

  background-color:${({theme})=>theme.colors.white};
`;

const IsToggleLocationDiv=styled.div`
  display:flex;
  text-align:center;
  align-items:center;
  justify-content:center;

  cursor: pointer;

  width:100px;
  height:40px;

  margin-top:23px;
  margin-left: 5px;
  margin-right: 5px;

  color: ${({ isSelected }) => isSelected ? '#ffffff' : '#14264C'};
  background-color: ${({ isSelected }) => isSelected ? '#14264C' : '#ffffff'};
  border: ${({ isSelected }) => isSelected ? '4px solid #ffffff' : 'none'};
  border-radius:25px;
  
  
  font-size:22px;
  font-weight:700;
  
  &:hover{
    opacity: 0.7;
    /* color:${({theme})=>theme.colors.white};
    transition:color 0.2s;
    
    background-color:${({theme})=>theme.colors.darkblue};
    transition:background-color 0.2s; */
  }
  &.background{
    background-color: #14264C;
  }
`;

//Crops 토글
const IsToggleCropDiv=styled.div`
  display:flex;
  text-align:center;
  align-items:center;
  justify-content:center;

  cursor: pointer;

  width:100px;
  height:40px;

  margin-top:23px;
  margin-left: 5px;
  margin-right: 5px;

  color: ${({ isSelected }) => isSelected ? '#ffffff' : '#14264C'};
  background-color: ${({ isSelected }) => isSelected ? '#14264C' : '#ffffff'};
  border: ${({ isSelected }) => isSelected ? '4px solid #ffffff' : 'none'};
  border-radius:25px;
  
  font-size:22px;
  font-weight:700;
  
  &:hover{
    opacity: 0.7;
    /* color:${({theme})=>theme.colors.white};
    transition:color 0.2s;
    
    background-color:${({theme})=>theme.colors.darkblue};
    transition:background-color 0.2s; */
  }

  &.background{
    background-color: #14264C;
  }
`;
const IsToggledButtonsDiv=styled.div`
  display:flex;
  /* flex-direction:row; */
  /* align-items: center;
  justify-content: space-between; */
  &.changeButton{
    margin-bottom: 17px;
}

`;

const ChangeButton = styled.div`
display:flex;
text-align:center;
align-items:center;
justify-content:center;

cursor: pointer;

width: 100px;
height: 40px;
background-color: #FFAC4A;
border-radius:10px;

margin-top:23px;
margin-left: 5px;
margin-right: 5px;

font-size:22px;
font-weight:600;
color: #ffffff;

&.background{
    background-color: #14264C;
  }
`

function Header({selectedCrop, setSelectedCrop}) {
  const navigate = useNavigate();

  const [isSearchToggled, setIsSearchToggled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('충청도');
  // 임시 상태 추가
  const [tempSelectedLocation, setTempSelectedLocation] = useState(selectedLocation);
  const [tempSelectedCrop, setTempSelectedCrop] = useState(selectedCrop);

  const toggleSearch = () => {
    setIsSearchToggled(prev => !prev);
    // 모달을 연다면 임시 선택을 현재 선택으로 초기화
    setTempSelectedLocation(selectedLocation);
    setTempSelectedCrop(selectedCrop);
  };

  const handleLocationSelect = (location) => {
    setTempSelectedLocation(location); // 임시 위치 저장
  };

  const handleCropSelect = (crop) => {
    setTempSelectedCrop(crop); // 임시 작물 저장
  };

  const applyChanges = () => {
  
    // 임시 선택을 실제 선택으로 적용
    setSelectedLocation(tempSelectedLocation);
    setSelectedCrop(tempSelectedCrop);
    const inputDataBefore = JSON.parse(localStorage.getItem("inputData"));
    inputDataBefore.crop = selectedCrop;
    localStorage.setItem("inputData",JSON.stringify(inputDataBefore));
    setIsSearchToggled(false); // 모달 닫기
  };
  // const applyChanges = async () => {
  //   try{

  //   }
  //   // 임시 선택을 실제 선택으로 적용
  //   setSelectedLocation(tempSelectedLocation);
  //   setSelectedCrop(tempSelectedCrop);
  //   setIsSearchToggled(false); // 모달 닫기
  // }; 

  return (
    <>
        <Header1>
            <Button onClick={() => navigate('/main')}>
                <BiChevronLeft size='30px' color='#14264C'/>
            </Button>
            <Select>
                <Location>{selectedLocation}</Location>
                <Crop>{selectedCrop}</Crop>
            </Select>
            <Button onClick={toggleSearch}>
                <BiSearchAlt size='28px' color='#14264C'/>
            </Button>
        </Header1>
        {isSearchToggled && (
            <ModalBackground onClick={toggleSearch}>
                <ModalContent onClick={e => e.stopPropagation()}>
                    <IsToggledHeader>
                        <BsGeoFill size='24px' color='#FFFFFF'/> <span>지역 선택</span>
                    </IsToggledHeader>

                    <IsToggledLine />
                    
                    <IsToggledButtonsDiv>
                        <IsToggleLocationDiv className='background'></IsToggleLocationDiv>
                        <IsToggleLocationDiv 
                        onClick={() => handleLocationSelect('충청도')}
                        isSelected={tempSelectedLocation === '충청도'}
                        >충청도</IsToggleLocationDiv>
                        <IsToggleLocationDiv className='background'></IsToggleLocationDiv>
                    </IsToggledButtonsDiv>
                    

                    <IsToggledHeader>
                        <BsQuestionCircleFill size='24px' color='#FFFFFF'/> <span>작물 선택</span>
                    </IsToggledHeader>
                    
                    <IsToggledLine />
                    
                    <IsToggledButtonsDiv>
                        <IsToggleCropDiv 
                            onClick={() => handleCropSelect('감귤')}
                            isSelected={tempSelectedCrop === '감귤'}
                        >감귤</IsToggleCropDiv>
                        <IsToggleCropDiv 
                            onClick={() => handleCropSelect('고추')}
                            isSelected={tempSelectedCrop === '고추'}
                        >고추</IsToggleCropDiv>
                        <IsToggleCropDiv
                            onClick={() => handleCropSelect('콩')}
                            isSelected={tempSelectedCrop === '콩'}
                            >콩</IsToggleCropDiv>
                    </IsToggledButtonsDiv>
                    <IsToggledButtonsDiv>
                        <IsToggleCropDiv 
                            onClick={() => handleCropSelect('딸기')}
                            isSelected={tempSelectedCrop === '딸기'}
                            >딸기</IsToggleCropDiv>
                        <IsToggleCropDiv 
                            onClick={() => handleCropSelect('사과')}
                            isSelected={tempSelectedCrop === '사과'}
                        >사과</IsToggleCropDiv>
                        <IsToggleCropDiv className='background'></IsToggleCropDiv>
                    </IsToggledButtonsDiv>
                    
                    <IsToggledButtonsDiv className='changeButton'>
                        <ChangeButton className='background'></ChangeButton>
                        <ChangeButton className='background'></ChangeButton>
                        <ChangeButton onClick={applyChanges}>
                            변경하기
                        </ChangeButton>
                    </IsToggledButtonsDiv>
                    
                </ModalContent>
            </ModalBackground>
            
          )}
    </>
  )
}

export default Header
