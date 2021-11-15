import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Container= styled.div`
width: 100%;
height:85vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })};
`;
const Arrow =styled.div`
width: 50px;
height: 50px;
background-color: #e4f0fa;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
top:0;
bottom:0;
position: absolute;
margin: auto;
left:${props=> props.direction=== "left" && "10px"};
right:${props=> props.direction=== "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;
const  Title =styled.h1`
font-style: 70px;
`;
const  Desc = styled.p`
margin:50px 0px;
letter-spacing: 2px;
font-size: 20px;
font-weight: 500;
`;
const Button = styled.button`
font-size: 20px;
background-color: transparent;
padding: 5px;
cursor: pointer;
`;
export const Slider = () => {
    const [slideIndex, setSlideIndex] =useState(0);
    const handleClick=(direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 :2);
        }else
        {
            setSlideIndex(slideIndex<2 ? slideIndex +1 :0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <KeyboardArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button> Xem ngay</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <KeyboardArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
