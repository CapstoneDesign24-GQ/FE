import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

import { BsCaretDownFill,BsCaretUpFill } from "react-icons/bs";


const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonElement=styled.button`
    display: flex;
    align-items: center;
    align-items: center;
    text-align: center;

    cursor: pointer;
    
    padding: 19px 30px;

    width: ${({ theme }) => theme.divSizes.mainInputDivWidth};
    height: ${({ theme }) => theme.divSizes.mainInputDivHeight};

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.input};

    color: ${({ theme }) => theme.colors.darkblue};
    background-color: ${({ theme }) => theme.colors.lightgreen};
    transition: background-color 0.2s;

    font-size: ${({ theme }) => theme.fontSizes.input};
    font-weight: ${({ theme }) => theme.fontsWeights.inputLight};

    /* .icon {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.darkblue};
    } */

    &:hover {
        color: ${({ theme }) => theme.colors.darkblue} !important;
        transition: color 0.2s !important;
        background-color: ${({ theme }) => theme.hoverColors.main} !important;
        transition: background-color 0.2s !important;

        font-weight: ${({ theme }) => theme.fontsWeights.inputBold} !important;
    }
`;

const ToggleArrow=styled.div`
    margin-left: auto;
    color: ${({ theme }) => theme.colors.darkblue};
`;

const Toggle=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${({ theme }) => theme.divSizes.mainInputDivWidth};
    max-height: ${({ isToggled }) => (isToggled ? "300px" : "0px")};
    overflow: hidden;
    transition: max-height 0.3s ease-out;

    color: ${({ theme }) => theme.colors.darkblue};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 3px 5px #0000002f;

    border-radius: 15px;

    font-weight: ${({ theme }) => theme.fontsWeights.inputBold};
`;

const Header=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    /* text-align: center; */

    width: 100%;

    margin: 20px 0px 15px 0px;
    padding-left: 20px;

    font-size: ${({ theme }) => theme.fontSizes.inputBold};
    font-weight: ${({ theme }) => theme.fontsWeights.inputBold};

    span {
        margin-left: 10px;
    }

    .icon{
        margin: 0;
    }
`;

const Line=styled.div`
    width: 321px;
    height: 3px;

    background-color: ${({ theme }) => theme.colors.darkblue};
    border-radius: 15%;
`;

const Content=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    padding-bottom: 20px;
`;

const CropButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 20px;

    width: 100px;
    height: 40px;
    
    color: ${({ theme }) => theme.colors.darkblue};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    
    cursor: pointer;

    font-size: ${({ theme }) => theme.fontSizes.inputSelect};
    font-weight: ${({ theme }) => theme.fontsWeights.inputSelect};

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.2s;
        background-color: ${({ theme }) => theme.colors.darkblue};
        transition: background-color 0.2s;
    }

    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.darkblue};
    }
`;

function MainToggle({onToggle=()=>{},onClick=()=>{},header,elements=[],icon,toggleHeader}){
    const [isToggled, setIsToggled] = useState(false);
    const [selectedButton,setSelectedButton] = useState(null);

    const handleToggle=()=>{
        setIsToggled((prevState)=>!prevState)
        onToggle(!isToggled); // 토글 상태에 따라 Maindp dkffla
    }

    const handleButton=(elem)=>{
        setSelectedButton(elem);
        onClick(elem); // 작물 선택 시 부모 컴포넌트에 알림
    }

    return(
        <>
            <Container>
                <ButtonElement onClick={handleToggle}>
                    {header}
                    <ToggleArrow>
                        {isToggled?<BsCaretUpFill size={24}/>:<BsCaretDownFill size={24}/>}
                    </ToggleArrow>
                </ButtonElement>
                <Toggle isToggled={isToggled}>
                    <Header>
                        {icon}
                        <span>{toggleHeader}</span>
                    </Header>
                    <Line />
                    <Content>
                        {elements.map((elem) => (
                            <CropButton
                                key={elem}
                                onClick={() => handleButton(elem)}
                                className={selectedButton === elem ? "active" : ""}
                            >
                                {elem}
                            </CropButton>
                        ))}
                    </Content>
                </Toggle>
            </Container>
        </>
    )
}

export default MainToggle;