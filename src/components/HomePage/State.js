import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Worm from '../../assets/images/wormRightTop.png';
import StateData from '../../db/State.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 경보 아이콘
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
// 화살표 아이콘
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
// 상태 얼굴 아이콘
import {
  BsFillEmojiDizzyFill,
  BsFillEmojiAngryFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill
} from 'react-icons/bs';
// 확인하기 버튼 아이콘
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 330px;

  padding: 1.5vw;

  flex-wrap: wrap;
  gap: 1.5vw;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.red};

  border-radius: 35px;
`;

// 백분율에 따라 배경색 설정하는 함수
const getBackgroundColor = (percent) => {
    if (percent > 74) {
      return '#FF4A4A'; 
    } else if (percent > 49) {
      return '#FF6A4A'; 
    } else if (percent > 24) {
      return '#FFAC4A'; 
    } else {
      return '#2ADEA1'; 
    }
  };

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;

  font-size: ${({ theme }) => theme.fontSizes.stateHeader};
  font-weight: ${({ theme }) => theme.fontsWeights.state};

  .icon {
    width: ${({ theme }) => theme.icons.alert};
    height: ${({ theme }) => theme.icons.alert};

    margin: 0px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 1vw;
  margin-bottom: 15px;

  font-weight: ${({ theme }) => theme.fontsWeights.state};

  .arrowIcon {
    width: ${({ theme }) => theme.icons.componentLeft};
    height: ${({ theme }) => theme.icons.componentLeft};
  }
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
const LeftArrow=styled(BsCaretLeftFill)``;
const RightArrow=styled(BsCaretRightFill)``;

function LeftArrowMove(props){
    const {className, style, onClick} = props;
    return(
        <LeftArrow 
            className={className}
            style={{...style}}
            onClick={onClick}
        />
    );
}

function RightArrowMove(props){
    const {className,style,onClick}=props;
    return(
        <RightArrow 
            className={className}
            style={{...style}}
            onClick={onClick}
        />
    )
}
const StateBody = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap: 30px;

  .stateIcon {
    width: ${({ theme }) => theme.icons.componentState};
    height: ${({ theme }) => theme.icons.componentState};
  }
`;
const StateBodyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap: 20px;
  .percent {
    font-size: ${({ theme }) => theme.fonts.component.percent};
  }
  .state {
    font-size: ${({ theme }) => theme.fonts.component.state};
  }
  .pestName {
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.component.name};
  }
`;
const GotoDetail = styled.button`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;

  margin-top: 10px;
  padding: 18px 38px;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;

  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;

  font-size: ${({ theme }) => theme.fonts.stateButton};
  font-weight: ${({ theme }) => theme.fontsWeights.stateButton};
`;

export default State;

const iconMap = {
    '위험해요!': 'BsFillEmojiDizzyFill',
    '주의가 필요해요!': 'BsFillEmojiAngryFill',
    '조심해볼까요?': 'BsFillEmojiNeutralFill',
    '괜찮아요!': 'BsFillEmojiSmileFill'
  };
  

function State() {
  const [state, setState] = useState('');
  const [stateIcon, setStateIcon] = useState(null);
  const statePercent = parseInt(StateData.percent);

  useEffect(() => {
    let newState = '';
    if (statePercent > 74 && statePercent < 101) {
      newState = '위험해요!';
    } else if (statePercent > 49 && statePercent < 75) {
      newState = '주의가 필요해요!';
    } else if (statePercent > 24 && statePercent < 50) {
      newState = '조심해볼까요?';
    } else if (statePercent > 0 && statePercent < 25) {
      newState = '괜찮아요!';
    }
    setState(newState);
    setStateIcon(iconMap[newState]);
  }, [statePercent]);

  const IconComponent = stateIcon;
  //캐러셀 구현
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsCaretRightFill />,
    prevArrow: <BsCaretLeftFill />,
  };
  return (
    <>
      <Container style={{ backgroundColor: getBackgroundColor(statePercent) }}>
        <Header>
          <BsFillExclamationTriangleFill className='icon' />
          <p>경보</p>
        </Header>
        <Body>
          <Slider {...settings}>
            <SlideContainer>
                <BsCaretLeftFill className='arrowIcon' />
                    <StateBody>
                        {stateIcon && state === '위험해요!' && <BsFillEmojiDizzyFill className='stateIcon' />}
                        {stateIcon && state === '주의가 필요해요!' && <BsFillEmojiAngryFill className='stateIcon' />}
                        {stateIcon && state === '조심해볼까요?' && <BsFillEmojiNeutralFill className='stateIcon' />}
                        {stateIcon && state === '괜찮아요!' && <BsFillEmojiSmileFill className='stateIcon' />}
                        <StateBodyText>
                        <p className='percent' value={StateData.percent}>
                            {StateData.percent} %
                        </p>
                        <p className='state' value={state}>
                            {state}
                        </p>
                        <p className='pestName' value={StateData.pestName}>
                            {StateData.pestName}
                        </p>
                        </StateBodyText>
                        <Link to='/detail'>
                        <GotoDetail style={{ color: getBackgroundColor(statePercent) }}>
                            <BsArrowRightCircleFill />
                            확인하기
                        </GotoDetail>
                        </Link>
                    </StateBody>
                    <BsCaretRightFill className='arrowIcon' />
            </SlideContainer>
          </Slider>
        </Body>
      </Container>
    </>
  );
}

