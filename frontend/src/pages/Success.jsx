import styled from "styled-components";
import {useLocation} from "react-router";

const Container= styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(219, 228, 230, 0.5)
    ),
    url("https://i.pinimg.com/originals/ee/57/b6/ee57b60c6210616217a733b3fc7acf80.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PayContainer=styled.div`
    margin: 20px;
    align-items: center;
    flex-direction: column;
    background-color: lightsalmon;
    width:40%;
    height:38%;
    display:flex;
`;
const Title = styled.h1`
    display: flex;
    margin: 10px;
    padding: 5px;
    align-items: center;
    justify-content: center;

`;
const Desc = styled.span`
    font-size: 16px;
    font-weight: 200;
    font-style:italic ;
    margin: 10px 0px;
`;
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    font-weight: bolder;
    text-align:center;
`;
const Image =styled.img`
    width: 70px;
    height:70px;
    border-radius:50%;
`;

const Success = () => {
    const location= useLocation();
    console.log(location)
    return (
        <Container>
            <PayContainer>
                <Image src="https://i.pinimg.com/564x/63/f6/87/63f687662a5a17ee1fe3b1d25db4dfd6.jpg"/>
                <Title>THANH TOÁN THÀNH CÔNG</Title>
                <Button>Successfull</Button>
                <Desc>Đơn đặt hàng của bạn đang được chuẩn bị . Cảm ơn đã tin dùng sản phẩm của HEU&ENG SHOP</Desc>
            </PayContainer>
        </Container>
    )
}

export default Success;
