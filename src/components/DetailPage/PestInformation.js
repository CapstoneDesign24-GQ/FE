import React, { useState } from 'react';
import styled from 'styled-components'

// JSON 데이터를 임포트합니다.
import data from '../../db/PestInfo.json';

import PestImg from '../../assets/images/pestTestImg1.png';
import { BsFillQuestionCircleFill, BsDot, BsCaretDownFill ,BsCaretUpFill, BsRecordFill } from "react-icons/bs";


const Container = styled.div`
/* width: 388px; */
display: flex;
flex-direction: column;

justify-content: space-between;
flex-wrap: wrap;
gap: 1vw;

padding:28px;

width: 90%;

border-radius: 50px;
background-color: #ffffff;
box-shadow:0px 3px 5px #0000002f;

/* margin-bottom:30px; */
`;

const Header=styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;

  gap:1vw;

  .headerIcon{
    margin:0px;
    color: #14264C;
  }

  .headerText{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1vw;
    color: #14264C;
  }
`;

const PestInfo = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  flex-wrap: wrap;
  gap:0px;

  .dotIcon{
    margin:0px;
    color: #14264C;
  }

  .infoText{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.1vw;
    color: #14264C;
    margin-left: 11px;
    max-width: 246px; /* 너비를 270px로 제한 */

    word-wrap: normal; /* 기본적으로 공백에서 줄바꿈 */
    word-break: keep-all; /* 단어 중간에 줄바꿈하지 않음 */
    line-height: 1.2; /* 라인 간격을 1.2로 설정 */
  }
`

const ToggleDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap:0px;

  cursor: pointer;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;

  font-size: ${({theme})=>theme.fonts.dealWithPest.toggleHeader};
  font-weight: ${({theme})=>theme.fontsWeights.toggle};
`;
const ToggleDivHeader=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;

  width:100%;
  padding:18px;
  
  flex-wrap: wrap;
  gap:3vw;

  color:${({theme})=>theme.colors.white};
  background-color: #14264C;
  border-radius: 50px;

  font-weight: ${({theme})=>theme.fontsWeights.dealWithPest.toggleHeader};

  &:hover{
    opacity: 0.8;
  }

  .toggleHeader{
    display: flex;
    flex-direction: row;
    width: 100%;
    
    justify-content: space-between !important;

  }
  .headerText{
    display: flex;
    align-items: center; //상하 가운데 정렬
  }
  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};
    margin:0px;

    color:${({theme})=>theme.colors.white};
  }
`;

const ToggleContent=styled.div`
  padding:1vw;

  width: 100%;

  background-color: #E2EAFA;
  border-radius: 25px;
  box-shadow:0px 3px 5px #0000002f;

  /* display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;  */
`;
const TextBox=styled.div`
display: flex;
flex-direction: row;
justify-content: left;
color: #14264C;
font-size: 18px;
font-weight: 500;
margin: 20px;

.icon{
  margin:0px;
}

.text{
  margin-left: 13px;
}
`
const PestImgContainer2=styled.div`
display: flex;
justify-content: center; 
align-items: center; 
`;
const PestImgContainer=styled.div`
background-color: #14264C;
border-radius: 25px;
width: 250px;
height: 250px;

display: flex;
justify-content: center; 
align-items: center; 
`;

const PestImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
`;


function PestInformation() {
  const [isToggled01, setIsToggled01] = useState(false);

  const handleToggle01 = () => {
    setIsToggled01(prevState => !prevState);
};

  return (
    <Container>
        <Header>
          <BsFillQuestionCircleFill className='headerIcon'/>
          <span className='headerText'>{data.pestName} 정보</span>
        </Header>

        {data.details.map((detail) => (
          <PestInfo key={detail}>
            <BsDot className='dotIcon'/>
            <span className='infoText'>{detail}</span>
          </PestInfo>
        ))}

        <ToggleDiv onClick={handleToggle01}>
          <ToggleDivHeader>
            <div className='toggleHeader'>
              <div className='headerText'>
                해충 성장 단계별 사진
              </div>
              {isToggled01
                ?<BsCaretUpFill className='icon' />
                :<BsCaretDownFill className='icon'/>
              }
            </div>
          </ToggleDivHeader>
          {isToggled01 && (
            <ToggleContent>
              <TextBox>
                <BsRecordFill className='icon'/> <div className='text'>알 상태 사진</div>
              </TextBox>
              <PestImgContainer2>
                <PestImgContainer>
                  <PestImage src="/images/4/PestEgg.png"/>
                </PestImgContainer>
              </PestImgContainer2>

              <TextBox>
                <BsRecordFill className='icon'/> <div className='text'>약충 상태 사진</div>
              </TextBox>
              <PestImgContainer2>
                <PestImgContainer>
                  <PestImage src="/images/4/PestLarva.png"/>
                </PestImgContainer>
              </PestImgContainer2>

              <TextBox>
                <BsRecordFill className='icon'/> <div className='text'>성충 상태 사진</div>
              </TextBox>
              <PestImgContainer2>
                <PestImgContainer>
                  <PestImage src="/images/4/PestAdult.png"/>
                </PestImgContainer>
              </PestImgContainer2>
              
            </ToggleContent>
          )}
          {!isToggled01 && (<></>)}
        </ToggleDiv>
    </Container>
  )
}

export default PestInformation
