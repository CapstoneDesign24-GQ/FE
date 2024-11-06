import React,{useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {format} from 'date-fns';

import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputDiv=styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-align: center;

  cursor:pointer;

  padding:19px 30px;

  width:${({theme})=>theme.divSizes.mainInputDivWidth};
  height:${({theme})=>theme.divSizes.mainInputDivHeight};

  border : none;
  border-radius:${({theme})=>theme.borderRadius.input};
  
  color:${({theme})=>theme.colors.darkblue};
  background-color:${({theme})=>theme.colors.lightgreen};
  transition: background-color 0.2s;
  
  font-size:${({theme})=>theme.fontSizes.input};
  font-weight:${({theme})=>theme.fontsWeights.inputLight};

  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};

    margin:auto 0px auto auto;
    color:${({theme})=>theme.colors.darkblue};
  }

  &:hover {
    color : ${({theme})=>theme.colors.darkblue};
    transition: color 0.2s;
    background-color:${({theme})=>theme.hoverColors.main};
    transition: background-color 0.2s;
    
    font-weight:${({theme})=>theme.fontsWeights.inputBold};
  }

  button{
    width:100%;
    height:100%;
  }
`

const ToggleDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  /* height: 300px; */
  /* max-height: ${({ isToggled }) => (isToggled ? "300px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease-out; */
  /* transition: height 0.3s ease-out; */

  max-height: ${({ isToggled }) => (isToggled ? "360px" : "0px")};
  transition: max-height 0.3s ease-out;
  overflow: hidden;

  background-color: ${({theme})=>theme.colors.white};
  border-radius:25px;
  box-shadow:0px 3px 5px #0000002f;
`;
const ToggleCalendar=styled(Calendar)`
  border: none !important;
  outline: none;
  padding: 5% 2% 5% 2%;
  background-color: transparent;

  height: 100%;
  /* max-height: ${({ isToggled }) => (isToggled ? "100%" : "0%")}; */
  transition: height 0.3s ease-out;
  /* transition: max-height 0.3s ease-out; */

  .react-calendar__tile--active {
    background-color: transparent;
    color: white;
  }

  .react-calendar_navigation{
    display: flex;
  }

  .react-calendar_navigation button{
    min-width: 24px;
    background-color: none;
  }

  .react-calendar_navigation button:disabled {
    background-color: ${({theme})=>theme.colors.green};
    transition: all 0.1s;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus{
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;

    transition: all 0.1s;
  }

  .react-calender__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0%.5vw;
    transition: all 0.1s;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    color: ${({theme})=>theme.colors.darkblue};
  }

  .react-calendar__year-view .react-calendar__tile--now,
  .react-calendar__decade-view .react-calendar__tile--now,
  .react-calendar__century-view .react-calendar__tile--now {
    color: ${({theme})=>theme.colors.green};
    font-size: 16px;
    font-weight: bold;
    background-color: ${({theme})=>theme.colors.lightgreen};
    border-radius: 50%;
    transition: all 0.1s;

    &:hover{
    color: ${({theme})=>theme.colors.white};
    background-color: ${({theme})=>theme.colors.green};
    transition: all 0.1s;
    }
  }

  .react-calendar__year-view .react-calendar__tile--now:hover,
  .react-calendar__decade-view .react-calendar__tile--now:hover,
  .react-calendar__century-view .react-calendar__tile--now:hover {
    color: ${({theme})=>theme.colors.white};
    font-size: 16px;
    font-weight: bold;
    background-color: ${({theme})=>theme.colors.green};
    border-radius: 50%;
    transition: all 0.1s;
  }

  .react-calendar__year-view .react-calendar__tile:hover,
  .react-calendar__decade-view .react-calendar__tile:hover,
  .react-calendar__century-view .react-calendar__tile:hover {
    color: ${({theme})=>theme.colors.white};
    background-color: ${({theme})=>theme.colors.darkblue};
    transition: all 0.1s;
  }

  .react-calendar__year-view .react-calendar__tile:focus,
  .react-calendar__decade-view .react-calendar__tile:focus,
  .react-calendar__century-view .react-calendar__tile:focus {
    color: ${({theme})=>theme.colors.white};
    background-color: ${({theme})=>theme.colors.darkblue};
    transition: all 0.1s;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: rgba(20, 38, 76, 0.19);
    border-radius: 50%;
    transition: all 0.1s;
  }

  .react-calendar__tile--now {
    color: #ffffff;
    background-color: ${({theme})=>theme.colors.lightgreen};
    border-radius: 50%;
    transition: all 0.1s;
  }

  .react-calendar__tile--now:hover {
    color: #ffffff;
    background-color: ${({theme})=>theme.colors.green};
    border-radius: 50%;
    font-weight: bold;
    transition: all 0.1s;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    color: #ffffff;
    background-color: rgba(20, 38, 76, 0.19);
    font-weight: bold;
    transition: all 0.1s;
  }

  .react-calendar__tile{
    color: ${({theme})=>theme.colors.darkblue};
    border-radius: 100%;
    font-size: 16px;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: ${({theme})=>theme.colors.darkblue};
    border-radius: 100%;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.1s;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    color: #ffffff;
    background-color: ${({theme})=>theme.colors.darkblue};
    font-size: 14px;
    font-weight: bold;
    transition: all 0.1s;
  }

  .react-calendar__tile--hasActive{
    color: #ffffff;
    background-color: ${({theme})=>theme.colors.darkblue};
    transition: all 0.1s;
  }
`;

function InputDate( {onToggle,onChange,
  // onClick,
  value,
  header
} ) {
  const [isToggled, setIsToggled]=useState(false);
  const [selectedDate, setSelectedDate]=useState(value);

  const handleToggle=()=>{
    setIsToggled(prevState=>!prevState);
    onToggle(!isToggled); 
  };

  const handleDateChange=(date)=>{
    const formattedDate=format(date,'yyy-MM-dd');
    setSelectedDate(formattedDate);

    //부모 컴포넌트 선택 날짜 전달
    // onToggle(isToggled, formattedDate);
    onChange(formattedDate);
  };

  return (
    <>
      <Container>
        <InputDiv onClick={handleToggle}>
          {header}
          <div className='icon'>
            {isToggled?<BsCaretUpFill className='icon'/>:<BsCaretDownFill className='icon'/>}
          </div>
        </InputDiv>
        {isToggled&&(
          <ToggleDiv isToggled={isToggled}>
            <ToggleCalendar
              selected={selectedDate ? new Date(selectedDate) : null}
              onChange={handleDateChange}
              dateFormate='yyyy-MM-dd'
              formatDay={(locale, date) => moment(date).format("DD")}
            />
          </ToggleDiv>
        )}
        {!isToggled&&(<></>)}
      </Container>
    </>
  )
}

export default InputDate;
